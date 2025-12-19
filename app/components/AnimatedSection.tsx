'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade',
  delay = 0,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    fade: 'opacity-0',
    'slide-up': 'opacity-0 translate-y-8',
    'slide-left': 'opacity-0 translate-x-8',
    'slide-right': 'opacity-0 -translate-x-8',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : animationClasses[animation]
      } ${className}`}
    >
      {children}
    </div>
  );
}
