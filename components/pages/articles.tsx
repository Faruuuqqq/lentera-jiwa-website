import React from "react";
import { BookOpen, ChevronRight, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import { articles } from "@/lib/articles";

interface ArticlesPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedArticleSlug: (slug: string) => void;
}

export default function ArticlesPage({ setCurrentPage, setSelectedArticleSlug }: ArticlesPageProps) {
  const handleReadArticle = (slug: string) => {
    setSelectedArticleSlug(slug);
    setCurrentPage("article-detail");
  };

  return (
    <div className="min-h-screen bg-nara-paper pb-32">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nara-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 shadow-sm text-nara-charcoal text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-nara-orange" />
              Pojok Edukasi Lentera
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6 text-nara-charcoal leading-tight">
              Artikel Edukasi <br />
              <span className="italic text-slate-400 font-light">& Panduan Psikologis.</span>
            </h1>
            <p className="font-sans text-lg text-slate-600 max-w-2xl mx-auto leading-[1.7]">
              Kumpulan wawasan, panduan, dan tips kesehatan mental berbasis empati untuk membantumu memahami diri sendiri dan orang lain.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <AnimatedSection key={article.slug} delay={idx * 0.1}>
              <div 
                className="bg-white rounded-xl shadow-soft border border-slate-200 overflow-hidden hover:border-nara-orange hover:shadow-soft-lg transition-all duration-300 group h-full flex flex-col cursor-pointer"
                onClick={() => handleReadArticle(article.slug)}
              >
                {/* Image Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Category Badge overlaying the image */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-nara-charcoal shadow-sm">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl font-medium text-nara-charcoal mb-3 group-hover:text-nara-orange transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-[1.7] mb-6 flex-grow">
                    {article.summary}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="mt-auto flex items-center justify-between text-nara-orange font-medium text-sm">
                    <span>Baca Artikel</span>
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center group-hover:bg-nara-orange group-hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="max-w-4xl mx-auto px-4 mt-24">
        <AnimatedSection>
          <div className="bg-nara-charcoal rounded-xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-soft-lg">
             <div className="absolute top-0 right-0 w-64 h-64 bg-nara-orange/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="relative z-10">
               <BookOpen className="w-10 h-10 text-nara-orange mx-auto mb-6" />
               <h3 className="font-serif text-3xl font-medium mb-4">Butuh referensi terapi buku bacaan?</h3>
               <p className="text-slate-300 leading-[1.7] mb-8 max-w-lg mx-auto">
                 Selain artikel, kami juga memiliki kurasi buku khusus yang terbukti mampu merangkul sisi psikologismu untuk pulih.
               </p>
               <button
                 onClick={() => setCurrentPage("bibliotherapy")}
                 className="h-[48px] px-8 bg-nara-orange text-white font-medium rounded-lg hover:bg-orange-500 transition-colors shadow-sm inline-flex items-center gap-2"
               >
                 Jelajahi Biblioterapi
               </button>
             </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
