import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Find all scroll-glow-button elements and add scroll-active class
            const buttons = entry.target.querySelectorAll('.scroll-glow-button');
            buttons.forEach((button) => {
              button.classList.add('scroll-active');
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return sectionRef;
}
