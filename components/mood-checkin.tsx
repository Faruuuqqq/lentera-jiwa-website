"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

export default function MoodCheckIn() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [showMessage, setShowMessage] = useState(false)

  const moods = [
    { emoji: "😊", label: "Bahagia", color: "bg-yellow-100" },
    { emoji: "😌", label: "Tenang", color: "bg-teal-100" },
    { emoji: "😕", label: "Bingung", color: "bg-orange-100" },
    { emoji: "😢", label: "Sedih", color: "bg-blue-100" },
    { emoji: "😰", label: "Cemas", color: "bg-red-100" },
    { emoji: "😴", label: "Lelah", color: "bg-purple-100" },
  ]

  const responses = {
    "😊": "Senang mendengar hari ini baik-baik saja untukmu! Semoga terus terjaga 🌟",
    "😌": "Bagus, pertahankan ketenangan ini. Kamu melakukan dengan baik ✨",
    "😕": "Merasa bingung? Teman kami siap mendengarkan dan membantu klarifikasi. Hubungi mereka kapan saja 💭",
    "😢": "Sedih memang bagian dari hidup. Yang penting kamu tidak sendirian. Mari cerita bersama kami 💙",
    "😰": "Kecemasan adalah tanda bahwa kamu peduli. Tapi jangan biarkan sendirian. Hubungi Youth Anti-Bullying Indonesia sekarang 🤝",
    "😴": "Lelah? Istirahat adalah bagian dari perawatan diri. Cukupkan waktu tidurmu, dan hubungi kami kapan butuh 😴",
  }

  const handleMoodSelect = (emoji: string) => {
    setSelectedMood(emoji)
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 4000)
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-teal-100">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-teal-900 mb-2">Bagaimana Perasaanmu Hari Ini?</h3>
          <p className="text-teal-700">Bagikan perasaanmu, kami di sini untuk mendukung</p>
        </div>

        {/* Mood selector */}
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 mb-8">
          {moods.map((mood) => (
            <button
              key={mood.emoji}
              onClick={() => handleMoodSelect(mood.emoji)}
              className={`p-4 rounded-2xl transition-all duration-300 hover:scale-110 transform ${
                selectedMood === mood.emoji
                  ? `${mood.color} scale-110 shadow-lg`
                  : `${mood.color} opacity-70 hover:opacity-100`
              }`}
              title={mood.label}
            >
              <span className="text-4xl block">{mood.emoji}</span>
              <span className="text-xs font-medium text-gray-700 mt-1 block">{mood.label}</span>
            </button>
          ))}
        </div>

        {/* Response message */}
        {showMessage && selectedMood && (
          <div className="bg-gradient-to-r from-teal-50 to-peach-50 border border-teal-200 rounded-2xl p-6 flex gap-4 items-start animate-in fade-in slide-in-from-bottom-4">
            <MessageCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
            <p className="text-teal-800 leading-relaxed">{responses[selectedMood as keyof typeof responses]}</p>
          </div>
        )}

        {/* CTA after mood check-in */}
        {!showMessage && (
          <div className="bg-gradient-to-r from-teal-50 to-peach-50 rounded-2xl p-6 border border-teal-100">
            <p className="text-teal-800 text-center font-medium">
              Butuh bicara lebih lanjut?{" "}
              <button className="text-teal-600 font-bold hover:text-teal-700 underline">
                Hubungi Peer Supporter kami
              </button>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
