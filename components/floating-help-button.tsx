"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

interface FloatingHelpProps {
  setCurrentPage?: (page: string) => void;
}

export default function FloatingHelpButton({ setCurrentPage }: FloatingHelpProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-[#F6C453] to-[#F2994A] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-40"
        aria-label="Butuh bantuan"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Popup menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-3xl shadow-2xl border border-[#FDF3E3] overflow-hidden w-80 z-40 animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-gradient-to-r from-[#F6C453] to-[#F2994A] text-white p-6 text-center">
            <h3 className="font-bold text-lg mb-2">Butuh Teman Cerita?</h3>
            <p className="text-sm opacity-90">Kami ada untuk mendengarkan tanpa menghakimi.</p>
          </div>

          <div className="p-6 flex flex-col gap-3">
            <button 
              onClick={() => {
                if (setCurrentPage) setCurrentPage("cerita");
                setIsOpen(false);
              }}
              className="w-full py-4 px-4 bg-[#FFF8EC] text-[#F2994A] rounded-xl font-bold hover:bg-[#F2994A] hover:text-white transition-colors text-center shadow-sm"
            >
              Kotak Cerita ke Kami
            </button>
            <div className="py-2 text-center border-t border-slate-100 mt-2">
              <button 
                onClick={() => {
                  if (setCurrentPage) setCurrentPage("faq");
                  setIsOpen(false);
                }}
                className="text-sm text-slate-500 hover:text-[#F2994A] font-medium transition"
              >
                Lihat FAQ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
