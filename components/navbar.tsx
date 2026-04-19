"use client";

import { useState } from "react";
import { Menu, X, MessageCircle, BrainCircuit } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Beranda" },
    { id: "tentang", label: "Tentang Kami" },
    { id: "kenali-perundungan", label: "Perundungan" },
    { id: "program", label: "Program" },
    { id: "komunitas", label: "Komunitas" },
    { id: "bibliotherapy", label: "Biblioterapi" },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/lentera-jiwa-logo.png"
              alt="Lentera Jiwa Logo"
              width={60}
              height={25}
              className="group-hover:scale-105 transition"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#F2994A]">
                LENTERA JIWA
              </span>
              <span className="text-xs text-slate-500">
                Ruang Aman Anti-Perundungan
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition px-4 py-2 rounded-full ${
                  currentPage === link.id
                    ? "bg-[#FFF8EC] text-[#F2994A] font-bold"
                    : "text-slate-600 hover:text-[#F2994A] hover:bg-slate-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => handleNavClick("cerita")}
              className="px-6 py-2.5 text-sm font-bold text-slate-800 bg-[#F6C453] rounded-full hover:bg-[#F2994A] shadow-lg shadow-[#F6C453]/30 transition transform hover:-translate-y-0.5 hover:shadow-xl flex items-center gap-2 border border-[#F6C453]"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              Cerita ke Lentera
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay & Content */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-slate-100 p-4 space-y-2 shadow-xl z-50 animate-in slide-in-from-top-4 duration-300 md:hidden">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                  currentPage === link.id
                    ? "bg-[#FFF8EC] text-[#F2994A] font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#F2994A]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => handleNavClick("cerita")}
                className="block w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-[#F6C453] to-[#F2994A] text-white font-bold text-center mt-2 shadow-lg hover:shadow-xl transition-all"
              >
                Cerita ke Lentera
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
