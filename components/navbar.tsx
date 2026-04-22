"use client";

import { useState } from "react";
import { Menu, X, MessageCircle, ChevronDown, User } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Beranda" },
    { id: "kenali-perundungan", label: "Kenali Perundungan" },
    { id: "komunitas", label: "Komunitas" },
  ];

  const tentangDropdown = [
    { id: "tentang", label: "Tentang Kami" },
    { id: "program", label: "Program Kami" },
  ];

  const dukunganDropdown = [
    { id: "action-guide", label: "Apa yang Harus Dilakukan?" },
    { id: "faq", label: "Hubungi Kami" },
  ];

  const edukasiDropdown = [
    { id: "artikel", label: "Artikel Edukasi" },
    { id: "bibliotherapy", label: "Biblioterapi" },
  ];

  const profileDropdown = [
    { id: "journal", label: "Jurnal Rasa" },
    { id: "calmzone", label: "Ruang Tenang" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-lg border-b border-nara-yellow/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/icon-without-title.png"
              alt="Lentera Jiwa Logo"
              width={48}
              height={48}
              className="group-hover:scale-105 transition object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-nara-orange leading-tight">
                LENTERA JIWA
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                YOUTH ANTI-BULLYING
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">

            {/* Beranda */}
            <button
              onClick={() => handleNavClick("home")}
              className={`text-[13px] xl:text-sm font-bold transition px-4 py-2 rounded-full ${currentPage === "home"
                ? "bg-nara-yellow/10 text-nara-orange"
                : "text-slate-600 hover:text-nara-orange hover:bg-slate-50"
                }`}
            >
              Beranda
            </button>

            {/* Dropdown: Tentang */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-[13px] xl:text-sm font-bold px-4 py-2 rounded-full transition ${(["tentang", "program"].includes(currentPage)) ? "bg-nara-yellow/10 text-nara-orange" : "text-slate-600 hover:text-nara-orange hover:bg-slate-50"}`}>
                Tentang
                <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-soft-lg rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top overflow-hidden">
                <ul className="py-2">
                  {tentangDropdown.map((link, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full text-left px-5 py-3 text-sm font-semibold hover:bg-nara-blue-light/50 transition-colors ${currentPage === link.id ? "text-nara-orange" : "text-nara-charcoal"}`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kenali Perundungan */}
            <button
              onClick={() => handleNavClick("kenali-perundungan")}
              className={`text-[13px] xl:text-sm font-bold transition px-4 py-2 rounded-full ${currentPage === "kenali-perundungan"
                ? "bg-nara-yellow/10 text-nara-orange"
                : "text-slate-600 hover:text-nara-orange hover:bg-slate-50"
                }`}
            >
              Kenali Perundungan
            </button>

            {/* Dropdown: Dukungan */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-[13px] xl:text-sm font-bold px-4 py-2 rounded-full transition ${(["action-guide", "faq"].includes(currentPage)) ? "bg-nara-yellow/10 text-nara-orange" : "text-slate-600 hover:text-nara-orange hover:bg-slate-50"}`}>
                Dukungan
                <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-100 shadow-soft-lg rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top overflow-hidden">
                <ul className="py-2">
                  {dukunganDropdown.map((link, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full text-left px-5 py-3 text-sm font-semibold hover:bg-nara-blue-light/50 transition-colors ${currentPage === link.id ? "text-nara-orange" : "text-nara-charcoal"}`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dropdown: Edukasi */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-[13px] xl:text-sm font-bold px-4 py-2 rounded-full transition ${(["artikel", "bibliotherapy"].includes(currentPage)) ? "bg-nara-yellow/10 text-nara-orange" : "text-slate-600 hover:text-nara-orange hover:bg-slate-50"}`}>
                Edukasi
                <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-soft-lg rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top overflow-hidden">
                <ul className="py-2">
                  {edukasiDropdown.map((link, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full text-left px-5 py-3 text-sm font-semibold hover:bg-nara-blue-light/50 transition-colors ${currentPage === link.id ? "text-nara-orange" : "text-nara-charcoal"}`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Komunitas */}
            <button
              onClick={() => handleNavClick("komunitas")}
              className={`text-[13px] xl:text-sm font-bold transition px-4 py-2 rounded-full ${currentPage === "komunitas"
                ? "bg-nara-yellow/10 text-nara-orange"
                : "text-slate-600 hover:text-nara-orange hover:bg-slate-50"
                }`}
            >
              Komunitas
            </button>
          </div>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Dropdown: Profile / Healing Box */}
            <div className="relative group">
              <button className={`flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-nara-charcoal hover:bg-nara-blue-light hover:text-nara-orange transition border border-slate-200 shadow-sm ${(["journal", "calmzone"].includes(currentPage)) ? "bg-nara-blue-light border-nara-yellow/30 text-nara-orange" : ""}`}>
                <User className="w-5 h-5" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-slate-100 shadow-soft-lg rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top overflow-hidden right-0">
                <div className="px-5 py-3 bg-slate-50 border-b border-slate-100">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Fitur Personal</p>
                </div>
                <ul className="py-2">
                  {profileDropdown.map((link, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full text-left px-5 py-3 text-sm font-semibold hover:bg-nara-blue-light/50 transition-colors ${currentPage === link.id ? "text-nara-orange" : "text-nara-charcoal"}`}
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick("cerita")}
              className="px-6 py-2.5 text-sm font-bold text-white bg-nara-orange rounded-full hover:bg-[#D47125] shadow-soft transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 opacity-100" />
              Cerita ke Kami
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-nara-charcoal hover:bg-nara-blue-light rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay & Content */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 max-h-[85vh] overflow-y-auto bg-white border-b border-nara-yellow/20 p-6 space-y-4 shadow-soft-lg z-50 animate-in slide-in-from-top-4 duration-300 lg:hidden rounded-b-[2rem]">

            <div className="space-y-1 pb-4 border-b border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Menu Utama</p>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl font-bold transition text-nara-charcoal hover:bg-nara-blue-light"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="space-y-1 pb-4 border-b border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Dukungan & Aksi</p>
              {dukunganDropdown.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl font-semibold transition text-slate-600 hover:text-nara-orange hover:bg-slate-50"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="space-y-1 pb-4 border-b border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Edukasi & Bacaan</p>
              {edukasiDropdown.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl font-semibold transition text-slate-600 hover:text-nara-orange hover:bg-slate-50"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="space-y-1 pb-4 border-b border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Profil & Healing</p>
              {profileDropdown.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl font-semibold transition text-slate-600 hover:text-nara-orange hover:bg-slate-50"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNavClick("cerita")}
                className="block w-full px-4 py-4 rounded-xl bg-nara-orange text-white font-bold text-center shadow-soft hover:bg-[#D47125] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 opacity-100" />
                Cerita ke Kami
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
