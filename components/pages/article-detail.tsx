import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { articles } from '@/lib/articles';
import AnimatedSection from '@/components/ui/animated-section';

interface ArticleDetailProps {
  selectedArticleSlug: string;
  setCurrentPage: (page: string) => void;
}

const ArticleDetail = ({ selectedArticleSlug, setCurrentPage }: ArticleDetailProps) => {
  const article = articles.find((a) => a.slug === selectedArticleSlug);

  if (!article) {
    return (
      <div className="text-center py-20">
        <p className="text-slate-600 mb-4">Artikel tidak ditemukan.</p>
        <button onClick={() => setCurrentPage('artikel')} className="mt-4 text-[#2E5063] font-bold">
          Kembali ke Pojok Edukasi
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <button 
            onClick={() => setCurrentPage('artikel')} 
            className="flex items-center gap-2 text-nara-charcoal font-bold mb-8 hover:text-nara-orange transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Semua Artikel
          </button>
          
          <div className="article-content max-w-none">
            <span className="text-sm font-semibold text-[#C7913B] uppercase">{article.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2E5063] mt-2 mb-4">{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ArticleDetail;
