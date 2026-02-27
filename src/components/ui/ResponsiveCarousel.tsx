import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveCarouselProps {
  children: React.ReactNode;
  gridClasses: string; // e.g. "md:grid-cols-2 lg:grid-cols-4"
  className?: string;
}

export function ResponsiveCarousel({ children, gridClasses, className }: ResponsiveCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    const childElements = Array.from(container.children) as HTMLElement[];
    setItemCount(childElements.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = childElements.indexOf(entry.target as HTMLElement);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // 60% visibility required to be "active"
      }
    );

    childElements.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [children]);

  const scrollTo = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement;
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <div className={className}>
      <div 
        ref={scrollRef}
        className={cn(
          "flex overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:grid gap-6 scrollbar-hide snap-x snap-mandatory",
          gridClasses
        )}
      >
        {children}
      </div>
      
      {/* Dots - Hidden on desktop */}
      <div className="flex md:hidden justify-center items-center space-x-1.5 mt-2">
        {Array.from({ length: itemCount }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              idx === activeIndex ? "w-6 bg-black" : "w-1.5 bg-zinc-200 hover:bg-zinc-300"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
