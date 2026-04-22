"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Apa perbedaan Youth Anti-Bullying Indonesia dengan psikolog profesional?",
      answer:
        "Youth Anti-Bullying Indonesia bukan pengganti psikolog, melainkan jembatan pertama. Teman sebaya kami memberikan mendengarkan aktif, dukungan emosional dasar, dan Psychological First Aid. Jika diperlukan bantuan profesional lebih lanjut, kami akan merujuk ke P2K2 Unpad. Kehadiran teman sebaya menciptakan ruang yang lebih akrab dan mengurangi hambatan untuk mencari bantuan.",
    },
    {
      question: "Apakah informasi yang saya bagikan akan dijaga kerahasiaannya?",
      answer:
        "Ya, kerahasiaan adalah prinsip utama kami. Semua Youth Anti-Bullying Indonesia terlatih tentang etika pendampingan dan pentingnya menjaga privasi. Cerita dan informasi pribadi Anda tidak akan dibagikan tanpa izin, kecuali ada risiko keselamatan yang serius yang memerlukan intervensi profesional.",
    },
    {
      question: "Bagaimana cara menjadi bagian dari Youth Anti-Bullying Indonesia?",
      answer:
        "Anda bisa mendaftar melalui formulir di website ini atau menghubungi P2K2 Unpad. Calon anggota akan melalui proses seleksi berbasis empati, kemampuan komunikasi, dan komitmen menjaga kerahasiaan. Jika diterima, Anda akan mengikuti pelatihan profesional terstruktur selama beberapa minggu.",
    },
    {
      question: "Di mana saya bisa menemukan Youth Anti-Bullying Indonesia di kampus saya?",
      answer:
        "Youth Anti-Bullying Indonesia ada di setiap fakultas di Unpad. Anda bisa menghubungi koordinator Youth Anti-Bullying Indonesia di fakultas Anda, atau datang ke kantor P2K2 untuk dirujuk ke teman sebaya terdekat yang bisa membantu.",
    },
    {
      question: "Apakah ada biaya untuk mendapatkan dukungan dari Youth Anti-Bullying Indonesia?",
      answer:
        "Tidak ada biaya. Program Youth Anti-Bullying Indonesia adalah inisiatif dari mahasiswa untuk mahasiswa, didukung oleh P2K2 Unpad. Layanan dukungan teman sebaya ini gratis dan dapat diakses oleh semua mahasiswa Unpad.",
    },
    {
      question: "Bagaimana jika saya tidak nyaman berbagi cerita di awal?",
      answer:
        "Itu sangat normal! Tidak ada tekanan untuk berbagi lebih dari yang Anda nyaman. Youth Anti-Bullying Indonesia akan membantu Anda membangun kepercayaan secara bertahap. Anda bisa memulai dengan percakapan ringan atau sekadar mendengarkan kisah orang lain terlebih dahulu.",
    },
  ]

  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-sage-900 sm:text-4xl">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-lg text-sage-600">Temukan jawaban atas pertanyaan umum tentang program Youth Anti-Bullying Indonesia</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-sage-100 overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left hover:bg-sage-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-semibold text-sage-900">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-sage-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="border-t border-sage-100 bg-sage-50 px-6 py-4">
                  <p className="text-sage-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
