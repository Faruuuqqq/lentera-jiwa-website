import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import AnimatedSection from "@/components/ui/animated-section";

const communities = [
  {
    name: "Komunitas Anti-Bullying Indonesia",
    focus: "Pendidikan & Anak",
    description: "Komunitas yang berfokus pada kampanye anti-perundungan di sekolah-sekolah seluruh Indonesia.",
    link: "https://instagram.com"
  },
  {
    name: "Mental Health Youth",
    focus: "Kesehatan Mental Remaja",
    description: "Ruang berbagi untuk remaja yang pernah mengalami trauma perundungan secara daring maupun luring.",
    link: "https://instagram.com"
  },
  {
    name: "Aman Bersama",
    focus: "Masyarakat Umum",
    description: "Pelatihan untuk orang tua dan guru dalam menangani kasus bullying pada anak didik mereka.",
    link: "https://instagram.com"
  }
];

export default function Komunitas() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F2994A] mb-4">Komunitas Bersama Lentera</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Berjejaring dan berkolaborasi dengan komunitas-komunitas yang memiliki tujuan yang sama: menciptakan ruang aman bebas perundungan.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {communities.map((comm, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-transform transform hover:-translate-y-1 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F6C453]/20 flex items-center justify-center text-[#F2994A]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">{comm.name}</h3>
                    <span className="text-xs font-semibold text-[#6FCF97] bg-[#6FCF97]/10 px-2 py-1 rounded-md">{comm.focus}</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 text-sm flex-grow">
                  {comm.description}
                </p>
                <a href={comm.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-[#56CCF2] hover:text-[#2b8bac] transition-colors mt-auto">
                  Kunjungi Komunitas <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
