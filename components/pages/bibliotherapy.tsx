import React, { useState, useEffect } from "react";
import { BookOpen, Search, Info, Quote, Filter, X, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "next/image";

const quotes = [
  { text: "The only journey is the one within.", author: "Rainer Maria Rilke" },
  { text: "What you seek is seeking you.", author: "Jalaluddin Rumi" },
  { text: "The wound is the place where the Light enters you.", author: "Jalaluddin Rumi" },
  { text: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.", author: "Albus Dumbledore" },
];

interface BookData {
  title: string;
  author: string;
  cover: string;
  summary: string;
  tags: string[];
  ageGroup: string;
}

const bookCategories = [
  {
    mood: "Cemas",
    books: [
      { title: "Filosofi Teras", author: "Henry Manampiring", cover: "/books/cover-filosofi-teras.jpg", summary: "Pengantar filsafat Stoa yang relevan untuk mengatasi emosi negatif dan letih pikiran.", tags: ["Self-Improvement", "Filsafat"], ageGroup: "Mahasiswa" },
      { title: "The Things You Can See Only When You Slow Down", author: "Haemin Sunim", cover: "/books/cover_The_Things_You_Can_See_Only_When_You_Slow_Down.jpg", summary: "Ajakan untuk berhenti sejenak dan menemukan ketenangan di dunia yang serba cepat.", tags: ["Mindfulness"], ageGroup: "SMA" },
      { title: "Atomic Habits", author: "James Clear", cover: "/books/cover-atomic-habits.jpg", summary: "Membangun kebiasaan kecil yang berdampak besar bagi ketenangan jiwa.", tags: ["Produktivitas"], ageGroup: "SMP" },
      { title: "Mindset", author: "Carol S. Dweck", cover: "/books/cover-mindset.jpg", summary: "Mengubah pola pikir untuk menghadapi tantangan dengan lebih positif dan tabah.", tags: ["Psikologi"], ageGroup: "SD" },
    ],
  },
  {
    mood: "Sedih",
    books: [
      { title: "Alasan untuk Tetap Hidup", author: "Matt Haig", cover: "/books/cover-alasan.jpg", summary: "Memoar jujur tentang depresi dan bagaimana menemukan kembali harapan.", tags: ["Memoar", "Healing"], ageGroup: "Mahasiswa" },
      { title: "I Want to Die but I Want to Eat Tteokbokki", author: "Baek Sehee", cover: "/books/cover-tteokbokki.jpg", summary: "Dialog jujur dengan psikiater tentang dysthymia (depresi ringan berkepanjangan).", tags: ["Healing"], ageGroup: "SMA" },
    ]
  }
];

export default function BibliotherapyPage() {
  const [randomQuote, setRandomQuote] = useState(quotes[0]);
  const [ageFilter, setAgeFilter] = useState<string>("Semua Usia");
  const ageCategories = ["Semua Usia", "SD", "SMP", "SMA", "Mahasiswa"];

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const handleSearchBook = (title: string, author: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(`Buku ${title} karya ${author}`)}`, "_blank");
  };

  return (
    <div className="bg-nara-paper min-h-screen pb-32">
      {/* HEADER SECTION */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nara-blue-light text-nara-charcoal text-sm font-semibold mb-6">
                <BookOpen className="w-4 h-4 text-nara-orange" />
                Pojok Pustaka
              </div>
              <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6 text-nara-charcoal leading-tight">
                Biblioterapi <br />
                <span className="text-slate-400 italic">Lentera Jiwa.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
                Kadang, penyembuhan berawal dari lembaran kertas. Temukan kurasi bacaan yang dirancang untuk menenangkan pikiran, memvalidasi perasaan, dan memelukmu dalam kata.
              </p>
            </AnimatedSection>
          </div>

          {/* Inspirational Quote Card */}
          <div className="flex-1 w-full max-w-md">
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-soft-lg border border-slate-100 relative group overflow-hidden">
                <div className="w-24 h-24 bg-nara-yellow/10 rounded-full absolute -top-10 -left-10 group-hover:scale-150 transition-transform duration-700"></div>
                <Quote className="w-10 h-10 text-nara-yellow mb-6 relative z-10" />
                <p className="font-serif text-2xl md:text-3xl font-medium text-nara-charcoal mb-6 leading-snug relative z-10">"{randomQuote.text}"</p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-8 h-px bg-nara-orange"></div>
                  <p className="text-sm font-bold tracking-wider uppercase text-slate-400">{randomQuote.author}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-nara-orange" />
              <h3 className="font-bold text-nara-charcoal">Filter Usia Pembaca:</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {ageCategories.map((age) => (
                <button
                  key={age}
                  onClick={() => setAgeFilter(age)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${ageFilter === age
                      ? "bg-nara-charcoal text-white shadow-md"
                      : "bg-white text-nara-charcoal border border-slate-200 hover:border-nara-orange"
                    }`}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* BOOKS GRID */}
      <section className="max-w-6xl mx-auto px-4">
        {bookCategories.map((category, catIdx) => {
          // Filter books by selected age
          const filteredBooks = category.books.filter(
            (book) => ageFilter === "Semua Usia" || book.ageGroup === ageFilter
          );

          if (filteredBooks.length === 0) return null;

          return (
            <div key={catIdx} className="mb-20">
              <AnimatedSection>
                <div className="mb-10">
                  <h2 className="font-serif text-4xl font-bold text-nara-charcoal mb-2 flex items-center gap-3">
                    Saat Merasa <span className="text-nara-orange border-b-4 border-nara-yellow">{category.mood}</span>
                  </h2>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredBooks.map((book, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-soft-lg transition-all duration-500 border border-slate-100 group flex flex-col h-full cursor-pointer" onClick={() => handleSearchBook(book.title, book.author)}>

                      {/* Image Thumbnail Placeholder / Mockup */}
                      <div className="w-full aspect-[3/4] bg-nara-blue-light rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
                        <BookOpen className="w-16 h-16 text-nara-charcoal/10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm text-xs font-bold text-nara-orange z-10">
                          {book.ageGroup}
                        </div>
                      </div>

                      <div className="flex-grow">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {book.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-2 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-serif text-xl font-bold leading-tight mb-2 text-nara-charcoal group-hover:text-nara-orange transition-colors line-clamp-2">
                          {book.title}
                        </h3>
                        <p className="text-sm font-semibold text-nara-yellow mb-4">{book.author}</p>
                        <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                          {book.summary}
                        </p>
                      </div>

                      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400">Baca Selengkapnya</span>
                        <div className="w-8 h-8 rounded-full bg-nara-blue-light/50 flex items-center justify-center group-hover:bg-nara-orange group-hover:text-white transition-colors duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
