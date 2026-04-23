"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingHelpButton from "@/components/floating-help-button"

// Loading Skeleton for Lazy Loaded Pages
const PageSkeleton = () => (
  <div className="w-full max-w-7xl mx-auto min-h-[70vh] p-8 flex flex-col gap-6">
    <div className="h-12 w-2/3 md:w-1/3 bg-slate-200 rounded-xl animate-shimmer"></div>
    <div className="h-6 w-full md:w-1/2 bg-slate-100 rounded-xl animate-shimmer"></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="h-64 rounded-2xl bg-white border border-slate-100 shadow-sm animate-shimmer"></div>
      <div className="h-64 rounded-2xl bg-white border border-slate-100 shadow-sm animate-shimmer"></div>
      <div className="h-64 rounded-2xl bg-white border border-slate-100 shadow-sm animate-shimmer hidden md:block"></div>
    </div>
  </div>
);

// Vercel Best Practice (bundle-dynamic-imports): Heavy or conditional route components 
// are split into separate JS chunks, delaying Firebase and expensive sub-tree loads.
const Home = dynamic(() => import("@/components/pages/home"), { loading: () => <PageSkeleton /> })
const About = dynamic(() => import("@/components/pages/about"), { loading: () => <PageSkeleton /> })
const Programs = dynamic(() => import("@/components/pages/programs"), { loading: () => <PageSkeleton /> })
const Journal = dynamic(() => import("@/components/pages/journal"), { loading: () => <PageSkeleton /> })
const Curhat = dynamic(() => import("@/components/pages/curhat"), { loading: () => <PageSkeleton /> })
const FAQ = dynamic(() => import("@/components/pages/faq"), { loading: () => <PageSkeleton /> })
const Bibliotherapy = dynamic(() => import("@/components/pages/bibliotherapy"), { loading: () => <PageSkeleton /> })
const CalmZone = dynamic(() => import("@/components/pages/calmzone"), { loading: () => <PageSkeleton /> })
const Education = dynamic(() => import("@/components/pages/education"), { loading: () => <PageSkeleton /> })
const Articles = dynamic(() => import("@/components/pages/articles"), { loading: () => <PageSkeleton /> })
const ArticleDetail = dynamic(() => import("@/components/pages/article-detail"), { loading: () => <PageSkeleton /> })
const Komunitas = dynamic(() => import("@/components/pages/komunitas"), { loading: () => <PageSkeleton /> })
const CommunityDetail = dynamic(() => import("@/components/pages/community-detail"), { loading: () => <PageSkeleton /> })
const ActionGuide = dynamic(() => import("@/components/pages/action-guide"), { loading: () => <PageSkeleton /> })

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string>("")
  const [selectedCommunitySlug, setSelectedCommunitySlug] = useState<string>("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  // Vercel Best Practice (rendering-conditional-render): Avoid chained && rendering 
  // to prevent '0' falsy renders or layout shifts. Using a switch is inherently ternary.
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "tentang":
        return <About />;
      case "program":
        return <Programs />;
      case "komunitas":
        return <Komunitas setCurrentPage={setCurrentPage} setSelectedCommunitySlug={setSelectedCommunitySlug} />;
      case "community-detail":
        return <CommunityDetail slug={selectedCommunitySlug} onBack={() => setCurrentPage("komunitas")} />;
      case "bibliotherapy":
        return <Bibliotherapy />;
      case "kenali-perundungan":
        return <Education setCurrentPage={setCurrentPage} setSelectedArticleSlug={setSelectedArticleSlug} />;
      case "artikel":
        return <Articles setCurrentPage={setCurrentPage} setSelectedArticleSlug={setSelectedArticleSlug} />;
      case "journal":
        return <Journal setCurrentPage={setCurrentPage} />;
      case "cerita":
        return <Curhat />;
      case "faq":
        return <FAQ />;
      case "calmzone":
        return <CalmZone />;
      case "action-guide":
        return <ActionGuide setCurrentPage={setCurrentPage} />;
      case "article-detail":
        return <ArticleDetail selectedArticleSlug={selectedArticleSlug} setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="pt-20 flex-grow">
        {renderCurrentPage()}
      </div>
      <FloatingHelpButton setCurrentPage={setCurrentPage} />
      <Footer setCurrentPage={setCurrentPage} />
    </main>
  )
}
