"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/experience", label: "Experience" },
    { href: "/education", label: "Education" },
    { href: "/projects", label: "Projects" },
    { href: "/research", label: "Research" },
    { href: "/extracurricular", label: "Extra-Curricular" },
    { href: "/skills", label: "Skills" },
  ];

  const isHome = pathname === '/';

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-4 md:gap-6", className)}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors",
            pathname === item.href
              ? "text-primary"
              : "text-foreground/70 hover:text-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className={cn(
        "z-50 w-full animate-in fade-in duration-500",
        isHome ? "absolute top-0" : "sticky top-0 bg-background/80 backdrop-blur-sm"
    )}>
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="text-xl font-bold tracking-wider hover:text-primary transition-colors">
              VK
            </Link>

            <NavLinks className="hidden md:flex" />

            <div className="md:hidden">
                <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={cn(isHome ? "text-white hover:bg-white/10" : "text-foreground")}>
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <Link href="/" className="text-xl font-bold tracking-wider mb-8 block">VK</Link>
                    <div className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "text-lg font-medium transition-colors",
                                    pathname === item.href
                                    ? "text-primary"
                                    : "text-foreground/80 hover:text-foreground"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </SheetContent>
                </Sheet>
            </div>
        </div>
    </header>
  );
}
