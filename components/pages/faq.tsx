import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Apa itu Lentera Jiwa?",
    answer:
      "Lentera Jiwa adalah program pelatihan teman sebaya (peer support) yang fokus pada penguatan kemampuan mahasiswa dalam memberikan dukungan emosional dasar bagi sesama. Kami bukan pengganti psikolog, tapi hadir sebagai penutur awal, pendengar pertama, dan penjaga ruang aman.",
  },
  {
    question: "Apakah layanan Lentera Jiwa gratis?",
    answer:
      "Ya, layanan Lentera Jiwa sepenuhnya gratis untuk semua mahasiswa Universitas Padjadjaran. Kami didukung oleh P2K2 Unpad.",
  },
  {
    question: "Bagaimana cara menggunakan Kotak Cerita?",
    answer:
      "Kamu bisa menulis pesan di fitur 'Kotak Cerita' dengan memilih topik dan menuliskan cerita atau keluhan kamu. Relawan Lentera Jiwa akan membaca dan memberikan respon dalam waktu 1-2 hari kerja.",
  },
  {
    question: "Apakah data saya aman dan privat?",
    answer:
      "Ya, sangat. Data Jurnal Rasa kamu tersimpan 100% privat di perangkatmu sendiri. Untuk Kotak Cerita, kami menjaga kerahasiaan identitas kamu dan hanya Relawan terlatih yang akan membaca pesan kamu.",
  },
  {
    question: "Kapan saya bisa bertemu langsung dengan Relawan?",
    answer:
      "Relawan Lentera Jiwa tersebar di berbagai fakultas. Kamu bisa mencari tahu kontak mereka melalui website atau bertanya langsung ke P2K2 Unpad.",
  },
  {
    question: "Bagaimana cara bergabung sebagai Relawan Lentera Jiwa?",
    answer:
      "Buka halaman 'Join Program' atau hubungi P2K2 Unpad untuk mengetahui jadwal rekrutmen dan syarat-syarat yang diperlukan.",
  },
]

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#2E5063] mb-4">Pertanyaan Umum</h2>
        <p className="text-slate-600">Jika pertanyaanmu tidak terjawab di sini, jangan ragu untuk hubungi kami!</p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="bg-white border border-slate-200 rounded-xl overflow-hidden data-[state=open]:border-[#2E5063] data-[state=open]:shadow-md transition"
          >
            <AccordionTrigger className="px-6 py-4 text-left font-bold text-[#2E5063] hover:text-[#C7913B] transition">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-slate-600 border-t border-slate-100">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
