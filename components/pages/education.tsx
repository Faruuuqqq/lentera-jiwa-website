import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";
import { articles } from "@/lib/articles";
import Image from "next/image";

interface EducationPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedArticleSlug: (slug: string) => void;
}

const EducationPage = ({
  setCurrentPage,
  setSelectedArticleSlug,
}: EducationPageProps) => {
  return (
    <div className="bg-[#F0F4F8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2E5063] mb-3">
              Pojok Edukasi
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Tingkatkan literasi kesehatan mentalmu dengan artikel praktis dan
              mudah dipahami.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col group border border-slate-100 hover:-translate-y-1 cursor-pointer"
                onClick={() => {
                  setCurrentPage("article-detail");
                  setSelectedArticleSlug(article.slug);
                }}
              >
                {/* Image Section */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.jpg"} // Fallback image
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#2E5063] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#2E5063] mb-3 leading-tight group-hover:text-[#C7913B] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[#2E5063]">
                    <span className="text-xs font-semibold flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />3 min read
                    </span>
                    <button className="text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Baca <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
