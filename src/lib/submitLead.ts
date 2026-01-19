interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  sourceDetail?: string;
  recaptchaToken?: string;
}

interface StoredLead extends LeadFormData {
  id: string;
  timestamp: string;
  sent: boolean;
}

const LEADS_STORAGE_KEY = 'dario_growth_leads';

// Guardar lead en localStorage
export function saveLeadLocally(formData: LeadFormData): StoredLead {
  const leads = getStoredLeads();

  const newLead: StoredLead = {
    ...formData,
    id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
    sent: false,
  };

  leads.push(newLead);
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(leads));

  console.log('Lead guardado localmente:', newLead);
  return newLead;
}

// Obtener todos los leads guardados
export function getStoredLeads(): StoredLead[] {
  try {
    const stored = localStorage.getItem(LEADS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

// Marcar un lead como enviado
export function markLeadAsSent(leadId: string): void {
  const leads = getStoredLeads();
  const updatedLeads = leads.map(lead =>
    lead.id === leadId ? { ...lead, sent: true } : lead
  );
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updatedLeads));
}

// Obtener leads pendientes de enviar
export function getPendingLeads(): StoredLead[] {
  return getStoredLeads().filter(lead => !lead.sent);
}

// Exportar leads como JSON (para descargar)
export function exportLeadsAsJson(): string {
  const leads = getStoredLeads();
  return JSON.stringify(leads, null, 2);
}

export async function submitLead(formData: LeadFormData) {
  // Construir payload sin campos undefined (algunos APIs no los aceptan)
  const payload: Record<string, string> = {
    firstName: (formData.firstName || "").trim(),
    lastName: (formData.lastName || "").trim(),
    email: (formData.email || "").trim(),
    source: "dairotraslavina.com",
    sourceDetail: formData.sourceDetail || "Formulario de contacto",
  };

  // Solo agregar campos opcionales si tienen valor
  if (formData.phone?.trim()) {
    payload.phone = formData.phone.trim();
  }
  if (formData.company?.trim()) {
    payload.company = formData.company.trim();
  }
  if (formData.message?.trim()) {
    payload.message = formData.message.trim();
  }
  if (formData.recaptchaToken?.trim()) {
    payload.recaptchaToken = formData.recaptchaToken.trim();
  }

  console.log('Enviando lead al CRM:', JSON.stringify(payload, null, 2));

  const res = await fetch("https://os.dtgrowthpartners.com/api/crm/leads/public", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const responseText = await res.text();
  console.log('Respuesta raw del servidor:', res.status, responseText);

  let data;
  try {
    data = JSON.parse(responseText);
  } catch {
    data = { raw: responseText };
  }

  if (!res.ok) {
    const msg = data?.error || data?.message || data?.detail || `Error ${res.status}: No se pudo enviar el formulario`;
    throw new Error(msg);
  }

  return data;
}
