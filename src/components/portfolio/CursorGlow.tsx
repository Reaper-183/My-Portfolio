"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function CursorGlow({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // We only want the body glow on non-homepage pages
    if (isHomePage) {
        document.body.classList.remove('page-glow-background');
        return;
    }

    document.body.classList.add('page-glow-background');

    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('page-glow-background');
    };
  }, [isHomePage]);

  return <>{children}</>;
}
