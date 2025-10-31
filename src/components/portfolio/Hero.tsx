"use client";

import { useEffect, useRef } from 'react';
import type { Resume } from "@/lib/types";
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, FlaskConical, Github } from "lucide-react";
import { SkillsScroller } from './SkillsScroller';

type HeroProps = {
  resume: Resume;
};

export function Hero({ resume }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (!heroElement) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top } = heroElement.getBoundingClientRect();
      heroElement.style.setProperty('--mouse-x', `${clientX - left}px`);
      heroElement.style.setProperty('--mouse-y', `${clientY - top}px`);
    };

    heroElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      heroElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const contactInfo = [
    { icon: Mail, text: "Email", href: `mailto:${resume.email}` },
    { icon: Phone, text: "Phone", href: `tel:${resume.phone}` },
    { icon: Linkedin, text: "LinkedIn", href: resume.linkedin },
    { icon: Github, text: "GitHub", href: "https://github.com/Anonymous-2405" },
    { icon: FlaskConical, text: "ResearchGate", href: "https://www.researchgate.net/profile/Vinod-Kumar-316" },
    { icon: MapPin, text: resume.location, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resume.location)}` }
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen w-full hero-background flex flex-col justify-center items-center text-white p-4 scroll-mt-[100vh] relative overflow-hidden"
    >
        <div className="hero-patterns">
            <div className="hero-pattern-1" />
            <div className="hero-pattern-2" />
            <div className="hero-pattern-3" />
        </div>
        <div className="flex flex-col items-center text-center z-10 animate-in fade-in duration-1000 pt-24 pb-8 md:py-0">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <Image 
                src="/profile1.jpg"
                alt={resume.name}
                width={144}
                height={144}
                className="rounded-full border-4 border-white/20 shadow-lg shrink-0"
                priority
              />
              <div>
                <h1 className="mt-6 md:mt-0 text-5xl md:text-7xl font-bold tracking-tight">
                  {resume.name}
                </h1>
                <p className="mt-3 text-lg md:text-xl text-white/80">
                  {resume.headline}
                </p>
              </div>
            </div>


            <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
                {contactInfo.map((item, index) => {
                    const Component = item.href ? 'a' : 'div';
                    return (
                        <Component 
                            key={index} 
                            href={item.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center bg-white/10 hover:bg-white/20 transition-colors text-white text-sm rounded-full px-4 py-2 backdrop-blur-sm cursor-pointer"
                        >
                            <item.icon className="h-4 w-4 mr-1.5 shrink-0" />
                            <span>{item.text}</span>
                        </Component>
                    );
                })}
            </div>

            <p className="mt-8 max-w-3xl text-base md:text-lg text-white/90">
              {resume.summary}
            </p>
        </div>
        <div className="relative md:absolute bottom-0 left-0 w-full z-10 py-4 md:py-0">
          <SkillsScroller />
        </div>
    </section>
  );
}
