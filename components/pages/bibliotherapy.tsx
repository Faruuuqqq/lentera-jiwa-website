import React, { useState, useEffect } from "react";
import {
  Book,
  Sparkles,
  X,
  BookOpen,
  Search,
  Star,
  Info,
  Quote,
} from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import Image from "next/image";

const quotes = [
  {
    text: "The only journey is the one within.",
    author: "Rainer Maria Rilke (Austrian Poet & Novelist)",
  },
  {
    text: "What you seek is seeking you.",
    author: "Jalaluddin Rumi (The Masnavi)",
  },
  {
    text: "The wound is the place where the Light enters you.",
    author: "Jalaluddin Rumi (Selected Poems)",
  },
  {
    text: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
    author: "C.G. Jung (Psychologist & Psychoanalyst)",
  },
  {
    text: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
    author: "Albus Dumbledore (Harry Potter and the Prisoner of Azkaban)",
  },
  {
    text: "You don’t have to control your thoughts. You just have to stop letting them control you.",
    author: "Dan Millman (Way of the Peaceful Warrior)",
  },
  {
    text: "There is hope, even when your brain tells you there isn’t.",
    author: "John Green (Turtles All the Way Down)",
  },
  {
    text: "Your present circumstances don't determine where you can go; they merely determine where you start.",
    author: "Nido Qubein (Stairway to Success)",
  },
];

// Interface Data Buku
interface BookData {
  title: string;
  author: string;
  cover: string;
  summary: string;
  longSummary: string;
  tags: string[];
  ageGroup: string;
}

const BibliotherapyPage = () => {
  const [randomQuote, setRandomQuote] = useState(quotes[0]);
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);
  const [ageFilter, setAgeFilter] = useState<string>("Semua");

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  // Fungsi untuk membuka pencarian buku di tab baru
  const handleSearchBook = (title: string, author: string) => {
    const query = encodeURIComponent(`Buku ${title} karya ${author}`);
    window.open(`https://www.google.com/search?q=${query}`, "_blank");
  };

  // Data Buku
  const bookCategories = [
    {
      mood: "Cemas",
      description:
        "Untuk menenangkan pikiran dan membangun mental yang tangguh.",
      books: [
        {
          title: "Filosofi Teras",
          author: "Henry Manampiring",
          cover: "/books/cover-filosofi-teras.jpg",
          summary:
            "Pengantar filsafat Stoa yang relevan untuk mengatasi emosi negatif.",
          longSummary:
            "Buku ini menjelaskan filsafat Stoisisme dengan bahasa yang sangat ringan dan relevan untuk generasi masa kini. Henry mengajarkan 'Dikotomi Kendali'—membedakan hal yang bisa kita kendalikan dan yang tidak. Ini adalah obat ampuh untuk kecemasan berlebih.",
          tags: ["Self-Improvement", "Filsafat", "Lokal"],
          ageGroup: "Mahasiswa/Umum",
        },
        {
          title: "The Things You Can See Only When You Slow Down",
          author: "Haemin Sunim",
          cover:
            "/books/cover_The_Things_You_Can_See_Only_When_You_Slow_Down.jpg",
          summary:
            "Ajakan untuk berhenti sejenak dan menemukan ketenangan di dunia yang serba cepat.",
          longSummary:
            "Ditulis oleh seorang biksu Zen, buku ini berisi kumpulan esai pendek dan aforisme yang menenangkan hati. Membahas topik istirahat, hubungan, hingga masa depan. Cocok dibaca perlahan saat pikiran sedang kalut.",
          tags: ["Mindfulness", "Spiritualitas", "Healing"],
          ageGroup: "SMA",
        },
        {
          title: "Atomic Habits",
          author: "James Clear",
          cover: "/books/cover-atomic-habits.jpg",
          summary:
            "Membangun kebiasaan kecil yang berdampak besar bagi ketenangan jiwa.",
          longSummary:
            "Seringkali kecemasan muncul karena kita merasa tidak produktif atau gagal mencapai target besar. James Clear mengajarkan bahwa perubahan besar berasal dari perbaikan 1% setiap hari. Buku ini membantu kita fokus pada sistem, bukan sekadar tujuan.",
          tags: ["Produktivitas", "Psikologi", "Habits"],
          ageGroup: "SMP",
        },
        {
          title: "Mindset",
          author: "Carol S. Dweck",
          cover: "/books/cover-mindset.jpg",
          summary:
            "Mengubah pola pikir untuk menghadapi tantangan dengan lebih positif.",
          longSummary:
            "Carol Dweck memperkenalkan konsep 'Growth Mindset' vs 'Fixed Mindset'. Buku ini mengajarkan kita untuk melihat kegagalan bukan sebagai akhir, melainkan sebagai kesempatan untuk belajar. Sangat membantu meredakan cemas akan kegagalan akademik.",
          tags: ["Psikologi", "Edukasi", "Motivasi"],
          ageGroup: "SD",
        },
      ],
    },
    {
      mood: "Sedih",
      description: "Untuk memvalidasi perasaan dan menemukan kembali harapan.",
      books: [
        {
          title: "Alasan untuk Tetap Hidup",
          author: "Matt Haig",
          cover: "/books/cover-alasan.jpg",
          summary:
            "Memoar jujur tentang depresi dan bagaimana menemukan kembali harapan.",
          longSummary:
            "Matt Haig berbagi kisah nyatanya berjuang melawan depresi berat dan gangguan panik. Buku ini tidak menggurui, melainkan merangkul. Ia membuktikan bahwa bahkan di titik tergelap, selalu ada alasan kecil untuk bertahan.",
          tags: ["Memoar", "Depresi", "Harapan"],
          ageGroup: "Mahasiswa/Umum",
        },
        {
          title: "I Want to Die but I Want to Eat Tteokbokki",
          author: "Baek Se-hee",
          cover: "/books/cover-i-want.jpg",
          summary:
            "Percakapan dengan psikiater yang membantu penulis memahami dirinya sendiri.",
          longSummary:
            "Buku ini adalah transkrip percakapan antara penulis yang mengalami distimia (depresi ringan berkepanjangan) dengan psikiaternya. Sangat relatable bagi siapa saja yang terlihat baik-baik saja di luar, namun rapuh di dalam.",
          tags: ["Kesehatan Mental", "Esai", "Validasi"],
          ageGroup: "SMA",
        },
        {
          title: "Man's Search for Meaning",
          author: "Viktor E. Frankl",
          cover: "/books/cover-man-searching-the-meaning.jpeg",
          summary:
            "Kisah seorang psikiater yang selamat dari Holocaust dan menemukan makna hidup.",
          longSummary:
            "Salah satu buku paling berpengaruh di dunia. Frankl menceritakan pengalamannya di kamp konsentrasi Nazi dan bagaimana ia menemukan bahwa manusia bisa bertahan dalam penderitaan apa pun asalkan ia memiliki 'makna' atau tujuan hidup.",
          tags: ["Klasik", "Psikologi", "Makna Hidup"],
          ageGroup: "Mahasiswa/Umum",
        },
        {
          title: "The Midnight Library",
          author: "Matt Haig",
          cover: "/books/cover-the-midnight-library.jpg",
          summary:
            "Fiksi yang menjelajahi pilihan hidup dan menemukan kebahagiaan di tempat yang tak terduga.",
          longSummary:
            "Novel tentang sebuah perpustakaan di antara hidup dan mati, di mana setiap buku memberikan kesempatan untuk mencoba kehidupan lain yang tidak kita jalani. Buku ini mengajarkan kita untuk berdamai dengan penyesalan.",
          tags: ["Fiksi", "Fantasi", "Kehidupan"],
          ageGroup: "SMP",
        },
      ],
    },
    {
      mood: "Lelah & Burnout",
      description:
        "Untuk mengembalikan energi dan semangat dalam menjalani hari.",
      books: [
        {
          title: "How to Do Nothing",
          author: "Jenny Odell",
          cover: "/books/cover-how-to-do-nothing.jpg",
          summary:
            "Sebuah manifesto untuk merebut kembali perhatian kita dari dunia digital.",
          longSummary:
            "Di dunia yang menuntut produktivitas 24/7, melakukan 'ketiadaan' adalah tindakan perlawanan. Buku ini mengajak kita untuk memelankan ritme, mengamati alam sekitar, dan menolak didikte oleh algoritma media sosial.",
          tags: ["Sosial", "Digital Detox", "Alam"],
          ageGroup: "Mahasiswa/Umum",
        },
        {
          title: "Rest",
          author: "Alex Soojung-Kim Pang",
          cover: "/books/cover-rest.jpg",
          summary:
            "Pentingnya istirahat yang disengaja untuk produktivitas dan kreativitas.",
          longSummary:
            "Buku ini membantah mitos bahwa sukses butuh kerja keras tanpa henti. Penulis menunjukkan bagaimana tokoh-tokoh hebat sejarah justru memprioritaskan istirahat serius (tidur siang, berjalan kaki, liburan) sebagai bagian dari pekerjaan mereka.",
          tags: ["Sains", "Work-Life Balance", "Produktivitas"],
          ageGroup: "SMA",
        },
        {
          title: "Essentialism",
          author: "Greg McKeown",
          cover: "/books/cover-esensialisme.jpg",
          summary:
            "Fokus pada hal-hal yang paling penting dan menghilangkan yang tidak perlu.",
          longSummary:
            "Esensialisme bukan tentang menyelesaikan lebih banyak hal, tapi tentang menyelesaikan hal yang 'benar'. Buku ini sangat membantu mahasiswa yang merasa overwhelmed dengan terlalu banyak organisasi dan kepanitiaan.",
          tags: ["Manajemen Waktu", "Prioritas", "Bisnis"],
          ageGroup: "Mahasiswa/Umum",
        },
        {
          title: "Grit",
          author: "Angela Duckworth",
          cover: "/books/cover-grit.jpg",
          summary:
            "Kekuatan dari ketekunan dan semangat untuk mencapai tujuan jangka panjang.",
          longSummary:
            "Bakat saja tidak cukup. Angela Duckworth menunjukkan bahwa kunci kesuksesan jangka panjang adalah 'Grit'—kombinasi antara hasrat (passion) dan kegigihan (perseverance). Cocok untuk kamu yang merasa ingin menyerah di tengah jalan.",
          tags: ["Psikologi", "Kesuksesan", "Riset"],
          ageGroup: "SMP",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#E6EFF2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2E5063] mb-3">
              Ruang Pustaka Digital
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Temukan literatur yang bisa menemanimu bertumbuh dan pulih.
            </p>
          </div>
        </AnimatedSection>

        {/* Split Layout: Introduction & Quotes */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16 max-w-6xl mx-auto">
            {/* Left Column: Explanation (60%) */}
            <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-sm border border-[#2E5063]/10 h-full flex flex-col justify-center relative overflow-hidden">
              {/* Dekorasi kecil */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E5063] to-[#C7913B]"></div>

              <h3 className="text-2xl font-bold text-[#2E5063] mb-4 flex items-center gap-3">
                <Info className="w-6 h-6 text-[#C7913B]" />
                Apa itu Biblioterapi?
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Biblioterapi adalah seni merawat jiwa melalui membaca. Kami
                percaya bahwa buku yang tepat dapat menjadi{" "}
                <span className="font-semibold text-[#2E5063]">
                  "teman bicara"
                </span>{" "}
                yang memberikan validasi, perspektif baru, dan ketenangan di
                saat-saat sulit. Ini bukan sekadar membaca, tapi sebuah
                perjalanan memeluk perasaan diri sendiri.
              </p>
            </div>

            {/* Right Column: Quote of the Moment (40%) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#2E5063] to-[#1D3442] p-8 rounded-2xl shadow-xl text-white h-full flex flex-col justify-center relative overflow-hidden">
              <Sparkles className="w-16 h-16 text-[#C7913B] absolute -top-2 -left-2 opacity-20" />
              <Quote className="w-12 h-12 text-[#C7913B] absolute bottom-4 right-4 opacity-20 rotate-180" />

              <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl font-serif italic mb-6 leading-relaxed">
                  "{randomQuote.text}"
                </p>
                <div className="inline-block px-4 py-1 rounded-full border border-[#C7913B]/50 bg-[#C7913B]/10">
                  <p className="text-sm text-[#C7913B] font-bold tracking-wider uppercase">
                    {randomQuote.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Book Recommendations */}
        <div className="space-y-16">
          <AnimatedSection delay={0.3}>
            <div className="flex bg-white p-4 rounded-xl shadow-sm border border-slate-200 justify-between items-center max-w-sm mx-auto mb-10">
              <span className="font-bold text-[#2E5063] whitespace-nowrap mr-4">Filter Usia:</span>
              <select
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                className="w-full bg-[#E6EFF2] text-[#2E5063] font-medium py-2 px-3 rounded-lg outline-none"
              >
                <option value="Semua">Semua Usia</option>
                <option value="SD">SD</option>
                <option value="SMP">SMP</option>
                <option value="SMA">SMA</option>
                <option value="Mahasiswa/Umum">Mahasiswa / Umum</option>
              </select>
            </div>
          </AnimatedSection>
          
          {bookCategories.map((category, index) => {
            const filteredBooks = category.books.filter(b => ageFilter === "Semua" || b.ageGroup === ageFilter);
            if (filteredBooks.length === 0) return null;
            return (
            <AnimatedSection key={category.mood} delay={index * 0.2 + 0.4}>
              <div className="flex items-end gap-4 mb-8 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-sm font-bold text-[#C7913B] uppercase tracking-widest">
                    Kategori
                  </span>
                  <h2 className="text-3xl font-bold text-[#2E5063]">
                    {category.mood}
                  </h2>
                </div>
                <p className="text-slate-500 pb-1 hidden md:block">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-10">
                {filteredBooks.map((book) => (
                  <div
                    key={book.title}
                    onClick={() => setSelectedBook(book as BookData)}
                    className="group cursor-pointer flex flex-col h-full"
                  >
                    {/* Book Cover Container */}
                    <div className="relative aspect-[2/3] mb-4 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300 ease-out">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="bg-white/90 backdrop-blur text-[#2E5063] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                          Baca Detail
                        </span>
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="flex flex-col flex-grow">
                      <h3 className="font-bold text-lg text-[#2E5063] leading-tight mb-1 line-clamp-2 group-hover:text-[#C7913B] transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium mb-2">
                        {book.author}
                      </p>
                      <div className="mt-auto flex gap-2 overflow-hidden">
                        {book.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 bg-white border border-slate-200 text-slate-500 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* PREMIUM MODAL DETAIL */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2E5063]/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className="bg-white rounded-3xl w-full max-w-4xl h-[85vh] md:h-auto md:max-h-[600px] shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-black/10 backdrop-blur-md rounded-full text-slate-700 md:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* LEFT: Visual Area */}
            <div className="w-full md:w-5/12 relative bg-gradient-to-br from-[#2E5063] to-[#1D3442] p-8 flex items-center justify-center">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #C7913B 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              {/* Book Cover with 3D Shadow */}
              <div className="relative w-40 md:w-48 aspect-[2/3] shadow-2xl transform md:rotate-y-12 md:group-hover:rotate-0 transition duration-500">
                <Image
                  src={selectedBook.cover}
                  alt={selectedBook.title}
                  fill
                  className="object-cover rounded-lg border-l-4 border-white/10"
                />
              </div>

              {/* Floating Stats (Mobile Hidden) */}
              <div className="absolute bottom-8 left-0 right-0 text-center hidden md:block">
                <div className="inline-flex gap-4 text-white/80 text-xs">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#C7913B]" /> Rekomendasi
                  </span>
                  <span className="flex items-center gap-1">
                    <Book className="w-3 h-3 text-[#C7913B]" /> Pustaka
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: Content Area */}
            <div className="w-full md:w-7/12 p-8 md:p-10 overflow-y-auto bg-white flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedBook.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#FDF3E3] text-[#C7913B] text-xs font-bold uppercase tracking-wider rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E5063] leading-tight mb-2">
                  {selectedBook.title}
                </h2>
                <p className="text-lg text-slate-500 font-medium">
                  karya {selectedBook.author}
                </p>
              </div>

              {/* Body */}
              <div className="space-y-6 text-slate-600 flex-grow">
                <div className="bg-[#E6EFF2]/50 p-4 rounded-xl border border-[#E6EFF2]">
                  <h4 className="flex items-center gap-2 font-bold text-[#2E5063] mb-2 text-sm">
                    <BookOpen className="w-4 h-4" />
                    Sinopsis Singkat
                  </h4>
                  <p className="text-sm leading-relaxed">
                    {selectedBook.summary}
                  </p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-[#2E5063] mb-3 text-sm">
                    <Sparkles className="w-4 h-4 text-[#C7913B]" />
                    Pelajaran Utama (Key Takeaways)
                  </h4>
                  <p className="leading-relaxed text-base">
                    {selectedBook.longSummary}
                  </p>
                </div>
              </div>

              {/* Footer Action */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex gap-3">
                {/* Tombol Close/Back */}
                <button
                  onClick={() => setSelectedBook(null)}
                  className="px-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition"
                >
                  Tutup
                </button>

                {/* Tombol Cari */}
                <button
                  onClick={() =>
                    handleSearchBook(selectedBook.title, selectedBook.author)
                  }
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#2E5063] text-white font-bold rounded-xl hover:bg-[#1D3442] transition shadow-lg shadow-[#2E5063]/20"
                >
                  <Search className="w-4 h-4" />
                  Cari Buku Ini
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BibliotherapyPage;
