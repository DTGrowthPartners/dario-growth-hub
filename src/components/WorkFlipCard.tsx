'use client';

import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export interface WorkFlipCardData {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  number: number;
  whatsappMessage?: string;
}

interface WorkFlipCardProps {
  data: WorkFlipCardData;
}

export function WorkFlipCard({ data }: WorkFlipCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const isTouchDevice =
    typeof window !== 'undefined' && 'ontouchstart' in window;

  const handleClick = () => {
    if (isTouchDevice) setIsFlipped(!isFlipped);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const handleCTAClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const phoneNumber = '573007189383';
    const message = data.whatsappMessage || `Hola Dario, me interesa saber más sobre: ${data.title}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className="relative w-full h-[28vh] md:h-64 cursor-pointer"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* FRONT: Icon, Title, Subtitle */}
        <div
          className="absolute inset-0 rounded-xl border border-border bg-card p-5 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-lg hover:border-primary/20 transition-shadow"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Step number */}
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-base font-bold">
            {data.number}
          </div>

          {/* Icon */}
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
            <data.icon className="w-6 h-6 text-primary" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-1">{data.title}</h3>

          {/* Subtitle */}
          <p className="text-sm font-medium text-primary">{data.subtitle}</p>
        </div>

        {/* BACK: Description + CTA */}
        <div
          className="absolute inset-0 rounded-xl border border-border bg-card p-4 shadow-sm flex flex-col items-center justify-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* Step number */}
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-base font-bold">
            {data.number}
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-center text-sm mb-4 flex-1" style={{ maxHeight: '140px' }}>
            {data.description}
          </p>

          {/* CTA Button */}
          <button
            onClick={handleCTAClick}
            className="flex items-center gap-2 px-3 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium text-sm transition-colors"
          >
            Conversar
            <ArrowRight className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
