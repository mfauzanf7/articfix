"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Industries", href: "#industries" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="ArcticFix"
            width={55}
            height={55}
            className="shrink-0"
          />

          <div>
            <h1 className="font-bold text-xl text-blue-700">ArcticFix</h1>
            <p className="text-xs text-gray-500">Engineering Solutions</p>
          </div>
        </a>

        <nav className="hidden md:flex gap-8 font-medium text-slate-700">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-blue-700 transition">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-slate-100 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-700 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}