"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function HeaderSimple() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <span className="text-white text-xl">📊</span>
            </div>
            <span className="text-2xl font-bold text-slate-900">
              DianBridge
            </span>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Iniciar Sesión</Button>
            <Button>Comenzar Gratis</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
