import React, { useState, useEffect } from "react";
import { BookOpen, Search, Info, Quote, Filter, X, ArrowUpRight, Users, Baby, GraduationCap, Heart } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

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
  keyPoints: string[];
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
        ageGroup: "SD",
        keyPoints: [
          "Keberanian untuk berbicara adalah langkah pertama mengatasi bullying",
          "Mencari bantuan orang dewasa bukan tanda kelemahan",
          "Setiap suara berharga dan pantas didengar",
          "Berbicara melawan ketidakadilan membutuhkan kekuatan batin"
        ]
      },
      { 
        title: "Sahabatku Bukan Musuhku", 
        author: "Trudy Ludwig", 
        cover: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80", 
        summary: "Memahami makna persahabatan sejati dan cara membedakan teman yang baik dari yang menyakiti.", 
        tags: ["Persahabatan", "Sosial"], 
        ageGroup: "SD",
        keyPoints: [
          "Teman sejati mendukung dan menghargai perbedaan",
          "Kenali tanda-tanda persahabatan yang tidak sehat",
          "Jangan takut untuk mencari teman baru yang lebih baik",
          "Persahabatan sejati dibangun di atas saling menghormati"
        ]
      },
      { 
        title: "Stop! Jangan Ganggu Aku", 
        author: "Cristina Kim", 
        cover: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=400&q=80", 
        summary: "Panduan praktis untuk anak-anak belajar menolak dan melawan perilaku bullying dengan cara yang positif.", 
        tags: ["Anti-Bullying", "Asertivitas"], 
        ageGroup: "SD",
        keyPoints: [
          "Katakan 'stop' dengan tegas dan percaya diri",
          "Jalanlah dengan teman-teman di area yang aman",
          "Laporkan setiap insiden bullying ke guru atau orang tua",
          "Asertivitas adalah keterampilan yang bisa dipelajari"
        ]
      },
      { 
        title: "Kata-Kata Itu Bisa Menyakiti", 
        author: "Jennifer O'Connell", 
        cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80", 
        summary: "Mengajarkan empati dan dampak kata-kata pada perasaan orang lain, serta cara berkomunikasi dengan baik.", 
        tags: ["Empati", "Komunikasi"], 
        ageGroup: "SD",
        keyPoints: [
          "Kata-kata kasar meninggalkan luka yang sulit sembuh",
          "Empati adalah kemampuan memahami perasaan orang lain",
          "Pilih kata-kata yang membangun, bukan merusak",
          "Maafkan dan belajar dari kesalahan komunikasi"
        ]
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
        ageGroup: "SMP",
        keyPoints: [
          "Jangan tunjukkan bahwa ejekan itu menyakitimu",
          "Gunakan humor sebagai tameng melawan ejekan",
          "Hindari konfrontasi fisik dan cari bantuan",
          "Percaya diri adalah perlindungan terbaik"
        ]
      },
      { 
        title: "Kuat Mental di Sekolah", 
        author: "Amy Morin", 
        cover: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=400&q=80", 
        summary: "Membangun ketahanan mental dan kekuatan batin untuk menghadapi tantangan sosial di sekolah.", 
        tags: ["Mental Health", "Resiliensi"], 
        ageGroup: "SMP",
        keyPoints: [
          "Ketahanan mental bisa dilatih dan dikembangkan",
          "Fokus pada hal-hal yang bisa kamu kendalikan",
          "Kesulitan adalah kesempatan untuk tumbuh",
          "Jaga kesehatan mental dengan istirahat yang cukup"
        ]
      },
      { 
        title: "Bukan Jahat, Tapi Bingung", 
        author: "Carrie Goldman", 
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", 
        summary: "Memahami mengapa seseorang menjadi pelaku bullying dan cara membantu mereka berubah menjadi lebih baik.", 
        tags: ["Empati", "Perilaku"], 
        ageGroup: "SMP",
        keyPoints: [
          "Pelaku bullying sering punya masalah emosional sendiri",
          "Memahami alasan di balik perilaku negatif",
          "Berdamai dengan pelaku bisa jadi solusi terbaik",
          "Bimbingan dan dukungan bisa mengubah perilaku"
        ]
      },
      { 
        title: "Wonder", 
        author: "R.J. Palacio", 
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80", 
        summary: "Kisah inspiratif tentang penerimaan diri dan kebaikan, belajar menghargai perbedaan setiap individu.", 
        tags: ["Penerimaan Diri", "Empati"], 
        ageGroup: "SMP",
        keyPoints: [
          "Kebaikan adalah bahasa universal yang dimengerti semua orang",
          "Jangan menilai orang dari penampilan luarnya",
          "Keberanian adalah melakukan hal benar meski sulit",
          "Setiap orang memiliki keistimewaan masing-masing"
        ]
      },
      { 
        title: "Teman atau Lawan?", 
        author: "Dorothy Espelage", 
        cover: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80", 
        summary: "Memahami dinamika pertemanan dan cara membangun hubungan yang sehat dan saling mendukung.", 
        tags: ["Relasi Sosial", "Pertemanan"], 
        ageGroup: "SMP",
        keyPoints: [
          "Kenali perbedaan antara konflik normal dan bullying",
          "Hubungan sehat saling menguatkan, bukan melemahkan",
          "Komunikasi terbuka kunci pertemanan yang kuat",
          "Jangan takut untuk mencari kelompok pertemanan baru"
        ]
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
        ageGroup: "SMA",
        keyPoints: [
          "Tekanan teman sebaya adalah hal normal di usia remaja",
          "Belajar mengatakan 'tidak' tanpa merasa bersalah",
          "Tetapkan nilai-nilai pribadi dan pegang teguh prinsip",
          "Teman sejati akan menerima kamu apa adanya"
        ]
      },
      { 
        title: "Ketika Teman Menyakiti", 
        author: "Rosalind Wiseman", 
        cover: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80", 
        summary: "Mengatasi relational bullying dan manipulasi dalam pertemanan remaja yang beracun.", 
        tags: ["Toxic Friends", "Relasional"], 
        ageGroup: "SMA",
        keyPoints: [
          "Relational bullying lebih sulit terlihat tapi sama menyakitkan",
          "Kenali tanda-tanda manipulasi emosional dalam pertemanan",
          "Tidak apa-apa untuk mengakhiri hubungan yang tidak sehat",
          "Bangun kembali kepercayaan diri setelah dikhianati"
        ]
      },
      { 
        title: "Self-Love untuk Remaja", 
        author: "Sharon Martin", 
        cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=400&q=80", 
        summary: "Membangun self-esteem dan mencintai diri sendiri sebagai fondasi melawan bullying dan negativitas.", 
        tags: ["Self-Love", "Self-Esteem"], 
        ageGroup: "SMA",
        keyPoints: [
          "Cintai dirimu sebelum mencintai orang lain",
          "Self-esteem adalah perisai melawan komentar negatif",
          "Terima kekuranganmu sambil terus berkembang",
          "Rayakan pencapaian kecil sebagai langkah besar"
        ]
      },
      { 
        title: "Speak", 
        author: "Laurie Halse Anderson", 
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80", 
        summary: "Kisah kuat tentang menemukan suara setelah mengalami trauma dan pentingnya berbicara.", 
        tags: ["Trauma", "Healing"], 
        ageGroup: "SMA",
        keyPoints: [
          "Pentingnya berbicara tentang pengalaman traumatis",
          "Kesunyian bisa lebih menyakitkan dari kekerasan itu sendiri",
          "Mencari bantuan profesional adalah tanda kekuatan",
          "Pemulihan membutuhkan waktu dan dukungan"
        ]
      },
      { 
        title: "The Perks of Being a Wallflower", 
        author: "Stephen Chbosky", 
        cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=400&q=80", 
        summary: "Perjalanan remaja menghadapi anxiety sosial dan menemukan tempatnya di dunia.", 
        tags: ["Anxiety", "Coming of Age"], 
        ageGroup: "SMA",
        keyPoints: [
          "Anxiety sosial bisa diatasi dengan dukungan yang tepat",
          "Menemukan komunitas yang menerima diri kita apa adanya",
          "Berpikir positif adalah pilihan yang bisa dilatih",
          "Setiap orang memiliki perjalanan unik menuju kedewasaan"
        ]
      },
      { 
        title: "It's Kind of a Funny Story", 
        author: "Ned Vizzini", 
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80", 
        summary: "Kisah autentik tentang depresi remaja dan perjalanan menuju kesehatan mental yang lebih baik.", 
        tags: ["Mental Health", "Depresi"], 
        ageGroup: "SMA",
        keyPoints: [
          "Depresi adalah kondisi medis yang bisa diobati",
          "Berbicara tentang perasaan adalah langkah pertama penyembuhan",
          "Tidak apa-apa untuk meminta bantuan profesional",
          "Harapan selalu ada meski terkadang sulit terlihat"
        ]
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
        ageGroup: "Orang Tua",
        keyPoints: [
          "Anak sering tidak melaporkan bullying karena takut atau malu",
          "Perhatikan perubahan perilaku dan mood sebagai tanda awal",
          "Validasi perasaan anak tanpa membuatnya merasa lemah",
          "Libatkan pihak sekolah untuk penanganan yang komprehensif"
        ]
      },
      { 
        title: "The Bully, the Bullied, and the Bystander", 
        author: "Barbara Coloroso", 
        cover: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80", 
        summary: "Memahami tiga peran dalam bullying dan strategi tepat untuk membantu anak di setiap posisi.", 
        tags: ["Strategi", "Intervensi"], 
        ageGroup: "Orang Tua",
        keyPoints: [
          "Pelaku, korban, dan pengamat sama-sama memerlukan perhatian",
          "Bystander memiliki kekuatan besar untuk menghentikan bullying",
          "Intervensi harus sesuai dengan peran anak dalam insiden",
          "Ciptakan lingkungan rumah yang mendukung komunikasi terbuka"
        ]
      },
      { 
        title: "Cara Mendukung Anak Korban Bullying", 
        author: "Allan Beane", 
        cover: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=400&q=80", 
        summary: "Langkah-langkah praktis yang bisa dilakukan orang tua saat mengetahui anaknya menjadi korban bullying.", 
        tags: ["Dukungan", "Tindakan"], 
        ageGroup: "Orang Tua",
        keyPoints: [
          "Dengarkan anak tanpa menghakimi atau menyalahkan",
          "Dokumentasikan semua insiden bullying secara detail",
          "Hubungi pihak sekolah dengan fakta dan tanpa emosi berlebihan",
          "Dampingi anak dalam proses pemulihan dengan sabar"
        ]
      },
      { 
        title: "Queen Bees and Wannabes", 
        author: "Rosalind Wiseman", 
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", 
        summary: "Memahami dinamika social bullying di kalangan perempuan remaja dan cara membantu putri Anda.", 
        tags: ["Girl Bullying", "Relasional"], 
        ageGroup: "Orang Tua",
        keyPoints: [
          "Bullying perempuan sering bersifat relasional dan tersembunyi",
          "Kenali hierarki sosial di kalangan perempuan remaja",
          "Bantu putri Anda membangun identitas yang kuat",
          "Ajarkan keterampilan konflik yang konstruktif"
        ]
      },
      { 
        title: "Tanda-Tanda Anak Dibully", 
        author: "Dr. Joel Haber", 
        cover: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=400&q=80", 
        summary: "Mengenali warning signs anak yang menjadi korban bullying sejak dini agar bisa ditangani lebih cepat.", 
        tags: ["Warning Signs", "Identifikasi"], 
        ageGroup: "Orang Tua",
        keyPoints: [
          "Perubahan perilaku sosial yang drastis",
          "Menolak pergi ke sekolah atau aktivitas tertentu",
          "Barang-barang pribadi sering hilang atau rusak",
          "Mengalami gangguan tidur atau mimpi buruk"
        ]
      },
      { 
        title: "Cyber-Safe Kids", 
        author: "Liz Repa", 
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80", 
        summary: "Panduan menjaga anak dari cyberbullying dan mengajarkan digital citizenship yang bertanggung jawab.", 
        tags: ["Cyberbullying", "Digital Parenting"], 
        ageGroup: "Orang Tua",
        keyPoints: [
          "Aktif memantau aktivitas online anak tanpa melanggar privasi",
          "Ajarkan anak untuk tidak membagikan informasi pribadi",
          "Kenali platform media sosial yang digunakan anak",
          "Ciptakan aturan penggunaan teknologi yang jelas di rumah"
        ]
      },
    ],
  },
];

export default function BibliotherapyPage() {
  const [randomQuote, setRandomQuote] = useState(quotes[0]);
  const [ageFilter, setAgeFilter] = useState<string>("Semua Usia");
  const [selectedBook, setSelectedBook] = useState<BookData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ageCategories = ["Semua Usia", "SD", "SMP", "SMA", "Orang Tua"];

  useEffect(() => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  const handleSearchBook = (title: string, author: string) => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(`Buku ${title} karya ${author}`)}`, "_blank");
  };

  const openBookModal = (book: BookData) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeBookModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBook(null), 300);
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
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-soft-lg transition-all duration-500 border border-slate-100 group flex flex-col h-full cursor-pointer" onClick={() => openBookModal(book)}>

                      {/* Book Cover Image */}
                      <div className="w-full aspect-[3/4] rounded-xl mb-6 relative overflow-hidden">
                        <img 
                          src={book.cover} 
                          alt={`Cover ${book.title}`}
                          className="w-full h-full object-cover"
                        />
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

      {/* BOOK DETAIL MODAL */}
      {isModalOpen && selectedBook && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeBookModal}
        >
          <div 
            className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <button 
                onClick={closeBookModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-600 hover:text-nara-orange hover:bg-white transition-all z-10 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Cover Image */}
              <div className="aspect-[16/9] relative overflow-hidden rounded-t-[2rem]">
                <img 
                  src={selectedBook.cover} 
                  alt={`Cover ${selectedBook.title}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 text-white">
                  <span className="inline-block px-3 py-1 bg-nara-orange text-xs font-bold rounded-full mb-2">
                    {selectedBook.ageGroup}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Title & Author */}
              <h2 className="font-serif text-3xl font-bold text-nara-charcoal mb-2">
                {selectedBook.title}
              </h2>
              <p className="text-lg text-nara-yellow font-semibold mb-4">
                oleh {selectedBook.author}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedBook.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-nara-blue-light text-nara-charcoal text-xs font-bold uppercase tracking-wider rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Sinopsis
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {selectedBook.summary}
                </p>
              </div>

              {/* Key Points */}
              {selectedBook.keyPoints && selectedBook.keyPoints.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Poin-Poin Utama
                  </h3>
                  <ul className="space-y-2">
                    {selectedBook.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-nara-orange/10 text-nara-orange flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-slate-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleSearchBook(selectedBook.title, selectedBook.author)}
                  className="flex-1 py-3 px-6 bg-nara-orange text-white font-bold rounded-xl hover:bg-[#D47125] transition-all flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Cari di Google
                </button>
                <button
                  onClick={closeBookModal}
                  className="flex-1 py-3 px-6 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
