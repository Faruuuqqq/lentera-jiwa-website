"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export default function FloatingHelpButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-teal-500 to-peach-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-40"
        aria-label="Butuh bantuan"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Popup menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-3xl shadow-2xl border border-teal-100 overflow-hidden w-80 z-40 animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-gradient-to-r from-teal-500 to-peach-500 text-white p-6 text-center">
            <h3 className="font-bold text-lg mb-2">Butuh Teman Cerita?</h3>
            <p className="text-sm opacity-90">Kami siap mendengarkan kapan saja</p>
          </div>

          <div className="p-6 space-y-3">
            <button className="w-full py-3 px-4 bg-teal-50 text-teal-700 rounded-xl font-medium hover:bg-teal-100 transition-colors text-left">
              💬 Chat dengan Peer Supporter
            </button>
            <button className="w-full py-3 px-4 bg-peach-50 text-peach-700 rounded-xl font-medium hover:bg-peach-100 transition-colors text-left">
              📞 Hubungi via WhatsApp
            </button>
            <button className="w-full py-3 px-4 bg-teal-100 text-teal-700 rounded-xl font-medium hover:bg-teal-200 transition-colors text-left">
              📧 Kirim Email
            </button>

            <div className="pt-3 border-t border-teal-100">
              <a href="#faq" className="text-sm text-teal-600 hover:text-teal-700 font-medium">
                Lihat FAQ →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
