"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap } from 'lucide-react';
import { SITE_CONFIG } from '@/constants';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-primary text-white shadow-md py-2" : "bg-transparent text-primary py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-secondary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {SITE_CONFIG.nav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/admissions"
            className="bg-secondary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-secondary-dark transition-colors"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary text-white border-t border-primary-light animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-4 gap-4">
            {SITE_CONFIG.nav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-medium hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/admissions"
              className="bg-secondary text-white text-center py-3 rounded-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
