import React, { useState, useEffect } from "react";
import { BookOpen, Search, Info, Quote, Filter, X, ArrowUpRight, Users, Baby, GraduationCap, Heart } from "lucide-react";
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
    category: "SD/MI",
    icon: Baby,
    description: "Buku untuk anak usia 7-12 tahun tentang persahabatan, keberanian, dan menghadapi bullying",
    books: [
      { 
        title: "Aku Berani Bicara", 
        author: "Michelle Markel", 
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80", 
        summary: "Kisah inspiratif tentang membangun keberanian untuk berbicara melawan ketidakadilan dan bullying di sekolah.", 
        tags: ["Keberanian", "Self-Esteem"], 
        ageGroup: "SD" 
      },
      { 
        title: "Sahabatku Bukan Musuhku", 
        author: "Trudy Ludwig", 
        cover: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80", 
        summary: "Memahami makna persahabatan sejati dan cara membedakan teman yang baik dari yang menyakiti.", 
        tags: ["Persahabatan", "Sosial"], 
        ageGroup: "SD" 
      },
      { 
        title: "Stop! Jangan Ganggu Aku", 
        author: "Cristina Kim", 
        cover: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80", 
        summary: "Panduan praktis untuk anak-anak belajar menolak dan melawan perilaku bullying dengan cara yang positif.", 
        tags: ["Anti-Bullying", "Asertivitas"], 
        ageGroup: "SD" 
      },
      { 
        title: "Kata-Kata Itu Bisa Menyakiti", 
        author: "Jennifer O'Connell", 
        cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80", 
        summary: "Mengajarkan empati dan dampak kata-kata pada perasaan orang lain, serta cara berkomunikasi dengan baik.", 
        tags: ["Empati", "Komunikasi"], 
        ageGroup: "SD" 
      },
    ],
  },
  {
    category: "SMP/MTs",
    icon: Users,
    description: "Buku untuk remaja usia 12-15 tahun tentang tekanan teman sebaya dan menghadapi ejekan",
    books: [
      { 
        title: "Cara Menghadapi Ejekan", 
        author: "Trevor Romain", 
        cover: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80", 
        summary: "Strategi praktis menghadapi verbal bullying dan ejekan dari teman sebaya tanpa kehilangan percaya diri.", 
        tags: ["Resiliensi", "Verbal Bullying"], 
        ageGroup: "SMP" 
      },
      { 
        title: "Kuat Mental di Sekolah", 
        author: "Amy Morin", 
        cover: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=400&q=80", 
        summary: "Membangun ketahanan mental dan kekuatan batin untuk menghadapi tantangan sosial di sekolah.", 
        tags: ["Mental Health", "Resiliensi"], 
        ageGroup: "SMP" 
      },
      { 
        title: "Bukan Jahat, Tapi Bingung", 
        author: "Carrie Goldman", 
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", 
        summary: "Memahami mengapa seseorang menjadi pelaku bullying dan cara membantu mereka berubah menjadi lebih baik.", 
        tags: ["Empati", "Perilaku"], 
        ageGroup: "SMP" 
      },
      { 
        title: "Wonder", 
        author: "R.J. Palacio", 
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80", 
        summary: "Kisah inspiratif tentang penerimaan diri dan kebaikan, belajar menghargai perbedaan setiap individu.", 
        tags: ["Penerimaan Diri", "Empati"], 
        ageGroup: "SMP" 
      },
      { 
        title: "Teman atau Lawan?", 
        author: "Dorothy Espelage", 
        cover: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80", 
        summary: "Memahami dinamika pertemanan dan cara membangun hubungan yang sehat dan saling mendukung.", 
        tags: ["Relasi Sosial", "Pertemanan"], 
        ageGroup: "SMP" 
      },
    ],
  },
  {
    category: "SMA/SMK/MA",
    icon: GraduationCap,
    description: "Buku untuk remaja usia 15-18 tahun tentang tekanan sosial dan kesehatan mental",
    books: [
      { 
        title: "Mengelola Tekanan Sosial", 
        author: "Lisa Schab", 
        cover: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=400&q=80", 
        summary: "Panduan lengkap menghadapi peer pressure dan tetap menjadi diri sendiri di tengah gengsi sosial.", 
        tags: ["Peer Pressure", "Identitas"], 
        ageGroup: "SMA" 
      },
      { 
        title: "Ketika Teman Menyakiti", 
        author: "Rosalind Wiseman", 
        cover: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80", 
        summary: "Mengatasi relational bullying dan manipulasi dalam pertemanan remaja yang beracun.", 
        tags: ["Toxic Friends", "Relasional"], 
        ageGroup: "SMA" 
      },
      { 
        title: "Self-Love untuk Remaja", 
        author: "Sharon Martin", 
        cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80", 
        summary: "Membangun self-esteem dan mencintai diri sendiri sebagai fondasi melawan bullying dan negativitas.", 
        tags: ["Self-Love", "Self-Esteem"], 
        ageGroup: "SMA" 
      },
      { 
        title: "Speak", 
        author: "Laurie Halse Anderson", 
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80", 
        summary: "Kisah kuat tentang menemukan suara setelah mengalami trauma dan pentingnya berbicara.", 
        tags: ["Trauma", "Healing"], 
        ageGroup: "SMA" 
      },
      { 
        title: "The Perks of Being a Wallflower", 
        author: "Stephen Chbosky", 
        cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=400&q=80", 
        summary: "Perjalanan remaja menghadapi anxiety sosial dan menemukan tempatnya di dunia.", 
        tags: ["Anxiety", "Coming of Age"], 
        ageGroup: "SMA" 
      },
      { 
        title: "It's Kind of a Funny Story", 
        author: "Ned Vizzini", 
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80", 
        summary: "Kisah autentik tentang depresi remaja dan perjalanan menuju kesehatan mental yang lebih baik.", 
        tags: ["Mental Health", "Depresi"], 
        ageGroup: "SMA" 
      },
    ],
  },
  {
    category: "Orang Tua",
    icon: Heart,
    description: "Buku untuk orang tua memahami bullying dan mendukung anak dengan tepat",
    books: [
      { 
        title: "Memahami Bullying dari Sudut Pandang Anak", 
        author: "Dr. T. Berry Brazelton", 
        cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=400&q=80", 
        summary: "Panduan komprehensif bagi orang tua untuk memahami psikologi anak yang mengalami atau melakukan bullying.", 
        tags: ["Parenting", "Psikologi Anak"], 
        ageGroup: "Orang Tua" 
      },
      { 
        title: "The Bully, the Bullied, and the Bystander", 
        author: "Barbara Coloroso", 
        cover: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80", 
        summary: "Memahami tiga peran dalam bullying dan strategi tepat untuk membantu anak di setiap posisi.", 
        tags: ["Strategi", "Intervensi"], 
        ageGroup: "Orang Tua" 
      },
      { 
        title: "Cara Mendukung Anak Korban Bullying", 
        author: "Allan Beane", 
        cover: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=400&q=80", 
        summary: "Langkah-langkah praktis yang bisa dilakukan orang tua saat mengetahui anaknya menjadi korban bullying.", 
        tags: ["Dukungan", "Tindakan"], 
        ageGroup: "Orang Tua" 
      },
      { 
        title: "Queen Bees and Wannabes", 
        author: "Rosalind Wiseman", 
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", 
        summary: "Memahami dinamika social bullying di kalangan perempuan remaja dan cara membantu putri Anda.", 
        tags: ["Girl Bullying", "Relasional"], 
        ageGroup: "Orang Tua" 
      },
      { 
        title: "Tanda-Tanda Anak Dibully", 
        author: "Dr. Joel Haber", 
        cover: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=400&q=80", 
        summary: "Mengenali warning signs anak yang menjadi korban bullying sejak dini agar bisa ditangani lebih cepat.", 
        tags: ["Warning Signs", "Identifikasi"], 
        ageGroup: "Orang Tua" 
      },
      { 
        title: "Cyber-Safe Kids", 
        author: "Liz Repa", 
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", 
        summary: "Panduan menjaga anak dari cyberbullying dan mengajarkan digital citizenship yang bertanggung jawab.", 
        tags: ["Cyberbullying", "Digital Parenting"], 
        ageGroup: "Orang Tua" 
      },
    ],
  },
];

export default function BibliotherapyPage() {
  const [randomQuote, setRandomQuote] = useState(quotes[0]);
  const [ageFilter, setAgeFilter] = useState<string>("Semua Usia");
  const ageCategories = ["Semua Usia", "SD", "SMP", "SMA", "Orang Tua"];

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
                <span className="text-slate-400 italic">Youth Anti-Bullying.</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-4">
                Kadang, penyembuhan berawal dari lembaran kertas. Temukan kurasi bacaan yang dirancang untuk menenangkan pikiran, memvalidasi perasaan, dan memelukmu dalam kata.
              </p>
              <p className="text-sm text-nara-orange font-semibold">
                Menerangi Pikiran, Menguatkan Perasaan melalui Bacaan
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

          const IconComponent = category.icon;

          return (
            <div key={catIdx} className="mb-20">
              <AnimatedSection>
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-nara-orange/10 rounded-xl flex items-center justify-center text-nara-orange">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="font-serif text-4xl font-bold text-nara-charcoal">
                      {category.category}
                    </h2>
                  </div>
                  <p className="text-slate-600 ml-15 pl-15">{category.description}</p>
                </div>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <AnimatedSection>
          <div className="bg-nara-charcoal rounded-2xl p-10 md:p-12 text-center text-white">
            <BookOpen className="w-12 h-12 text-nara-orange mx-auto mb-6" />
            <h2 className="font-serif text-3xl font-medium mb-4">Punya Rekomendasi Buku?</h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Jika kamu punya buku yang ingin direkomendasikan untuk biblioterapi kami, silakan hubungi tim Youth Anti-Bullying Indonesia.
            </p>
            <button className="px-8 py-3 bg-nara-orange text-white font-bold rounded-xl hover:bg-[#D47125] transition-all">
              Hubungi Kami
            </button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
