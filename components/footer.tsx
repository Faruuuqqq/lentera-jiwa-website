"use client";

import {
  BrainCircuit,
  Instagram,
  Twitter,
  Linkedin,
  Music2,
} from "lucide-react";
import { TikTok_Sans } from "next/font/google";
import Image from "next/image";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-white px-4 py-12 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/icon-without-title.png"
                alt="Youth Anti-Bullying Indonesia Logo"
                width={64}
                height={64}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#2E5063]">Youth Anti-Bullying</span>
                <span className="text-xs text-slate-500">Indonesia</span>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              Menerangi Pikiran, Menguatkan Perasaan melalui Bacaan.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-[#2E5063]">Navigasi</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button
                  onClick={() => setCurrentPage("home")}
                  className="hover:text-[#F2994A] transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("tentang")}
                  className="hover:text-[#F2994A] transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("program")}
                  className="hover:text-[#F2994A] transition-colors"
                >
                  Program Khusus
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("kenali-perundungan")}
                  className="hover:text-[#F2994A] transition-colors"
                >
                  Edukasi Perundungan
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-[#2E5063]">Fitur Utama</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button
                  onClick={() => setCurrentPage("bibliotherapy")}
                  className="hover:text-[#F2994A] transition-colors"
                >
                  Biblioterapi
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("komunitas")}
                  className="hover:text-[#F2994A] transition-colors"
                >
                  Komunitas
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("cerita")}
                  className="hover:text-[#F2994A] transition-colors"
                >
                  Cerita ke Kami
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-[#2E5063]">Bantuan</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <button
                  onClick={() => setCurrentPage("cerita")}
                  className="hover:text-[#F2994A] transition-colors"
                >
                  Kotak Cerita
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("faq")}
                  className="hover:text-[#F2994A] transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("calmzone")}
                  className="hover:text-[#F2994A] transition-colors"
                >
                  Ruang Tenang
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-[#2E5063]">Ikuti Kami</h4>
            <p className="text-sm text-slate-600 mb-4">
              Dapatkan info terbaru di media sosial kami.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-[#E6EFF2] text-[#2E5063] hover:bg-[#F2994A] hover:text-white transition-colors flex items-center justify-center"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-full bg-[#E6EFF2] text-[#2E5063] hover:bg-[#F2994A] hover:text-white transition-colors flex items-center justify-center"
              >
                <Music2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 text-center text-sm text-slate-500">
          <p>&copy; 2025 Youth Anti-Bullying Indonesia &mdash; Ruang Aman Anti-Perundungan. Dibuat dengan 🧡 untuk Generasi Muda Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
