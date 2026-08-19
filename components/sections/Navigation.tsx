"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Awards", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

interface NavigationProps {
  mobileMenuOpen?: boolean;
  setMobileMenuOpen?: (open: boolean) => void;
  handleMobileNavClick?: () => void;
}

export function Navigation({
  mobileMenuOpen: controlledOpen,
  setMobileMenuOpen: setControlledOpen,
  handleMobileNavClick: customNavClick,
}: NavigationProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setIsOpen = setControlledOpen !== undefined ? setControlledOpen : setInternalOpen;

  const handleClick = () => {
    setIsOpen(false);
    if (customNavClick) customNavClick();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#" className="font-mono text-xs uppercase tracking-[0.2em]">
          S.Chauhan<span className="text-primary">_</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://linkedin.com/in/saksham-chauhan-252003"
            target="_blank"
            rel="noreferrer"
            className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
          >
            LinkedIn
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://linkedin.com/in/saksham-chauhan-252003"
            target="_blank"
            rel="noreferrer"
            className="border border-border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] transition-colors hover:border-primary hover:text-primary"
          >
            LinkedIn
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-border bg-background/95 px-6 py-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.2em]">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className="py-1 text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
