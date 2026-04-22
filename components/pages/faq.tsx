import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

const faqs = [
  {
    question: "Apa itu Youth Anti-Bullying Indonesia?",
    answer:
      "Youth Anti-Bullying Indonesia adalah platform peer support yang fokus pada penguatan kemampuan remaja dalam memberikan dukungan emosional dasar bagi sesama. Kami bukan pengganti psikolog, tapi hadir sebagai penutur awal, pendengar pertama, dan penjaga ruang aman.",
  },
  {
    question: "Apakah layanan Youth Anti-Bullying Indonesia gratis?",
    answer:
      "Ya, layanan Youth Anti-Bullying Indonesia sepenuhnya gratis untuk semua remaja dan anak di Indonesia.",
  },
  {
    question: "Bagaimana cara menggunakan Kotak Cerita?",
    answer:
      "Kamu bisa menulis pesan di fitur 'Kotak Cerita' dengan memilih topik dan menuliskan cerita atau keluhan kamu. Relawan Youth Anti-Bullying Indonesia akan membaca dan memberikan respon dalam waktu 1-2 hari kerja.",
  },
  {
    question: "Apakah data saya aman dan privat?",
    answer:
      "Ya, sangat. Data Jurnal Rasa kamu tersimpan 100% privat di perangkatmu sendiri. Untuk Kotak Cerita, kami menjaga kerahasiaan identitas kamu dan hanya Relawan terlatih yang akan membaca pesan kamu.",
  },
  {
    question: "Kapan saya bisa bertemu langsung dengan Relawan?",
    answer:
      "Relawan Youth Anti-Bullying Indonesia tersebar di berbagai wilayah. Kamu bisa mencari tahu kontak mereka melalui website atau menghubungi kami langsung.",
  },
  {
    question: "Bagaimana cara bergabung sebagai Relawan Youth Anti-Bullying Indonesia?",
    answer:
      "Pendaftaran relawan akan diinfokan di website kami. Pastikan Anda memenuhi syarat yang mengutamakan tingkat empati emosional dan rekam jejak anti-perundungan.",
  },
]

export default function FAQ() {
  return (
    <div className="min-h-screen bg-nara-paper pb-32">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-nara-orange/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6 text-nara-charcoal leading-tight">
              Pusat Bantuan & <br />
              <span className="italic text-nara-orange font-light">Hubungi Kami.</span>
            </h1>
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto leading-[1.7]">
              Kami selalu ada di sini untuk mendengarkan. Temukan jawaban dari pertanyaan umum atau segera jangkau kami secara langsung.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* CONTACT CARDS */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-200 text-center flex flex-col items-center hover:border-nara-orange hover:shadow-soft-lg transition-all">
              <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center text-nara-orange mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-lg text-nara-charcoal mb-2">Email Khusus</h3>
              <p className="text-slate-500 text-sm mb-4">Untuk kemitraan & dukungan.</p>
              <a href="mailto:halo@youthantibullying.id" className="font-bold text-nara-orange hover:text-orange-600 mt-auto">
                halo@youthantibullying.id
              </a>
            </div>

            <div className="bg-nara-charcoal p-8 rounded-xl shadow-soft-lg border border-transparent text-center flex flex-col items-center relative overflow-hidden transform md:scale-[1.05] z-10 transition-transform">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-nara-orange/20 rounded-full blur-2xl"></div>
              <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center text-nara-orange mb-6 relative z-10">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-lg text-white mb-2 relative z-10">Hotline Darurat</h3>
              <p className="text-slate-300 text-sm mb-6 relative z-10">Layanan Darurat Konseling Profesional (KPAI).</p>
              <a href="tel:02131901556" className="h-[48px] px-6 bg-nara-orange text-white font-medium rounded-lg hover:bg-orange-500 flex items-center justify-center w-full transition-colors relative z-10">
                Hubungi KPAI
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft border border-slate-200 text-center flex flex-col items-center hover:border-nara-orange hover:shadow-soft-lg transition-all">
              <div className="w-14 h-14 bg-nara-blue-light rounded-lg flex items-center justify-center text-nara-charcoal mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-lg text-nara-charcoal mb-2">Layanan Online</h3>
              <p className="text-slate-500 text-sm mb-4">Layanan tersedia secara digital 24/7.</p>
              <span className="font-bold text-nara-charcoal mt-auto">
                Setiap Hari (24 Jam)
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4">
        <AnimatedSection delay={0.4}>
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-nara-charcoal">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-3xl font-medium text-nara-charcoal">FAQ (Tanya Jawab)</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden data-[state=open]:border-nara-orange data-[state=open]:bg-white data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-medium text-nara-charcoal hover:text-nara-orange transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-5 text-slate-600 leading-[1.7] border-t border-slate-100 bg-white">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
