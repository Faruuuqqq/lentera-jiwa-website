"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Home from "@/components/pages/home"
import About from "@/components/pages/about"
import Programs from "@/components/pages/programs"
import Journal from "@/components/pages/journal"
import Curhat from "@/components/pages/curhat"
import FAQ from "@/components/pages/faq"
import Bibliotherapy from "@/components/pages/bibliotherapy"
import CalmZone from "@/components/pages/calmzone"
import Education from "@/components/pages/education"
import ArticleDetail from "@/components/pages/article-detail"
import Komunitas from "@/components/pages/komunitas"
import Footer from "@/components/footer"

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string>("")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="pt-20">
        {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
        {currentPage === "tentang" && <About />}
        {currentPage === "program" && <Programs />}
        {currentPage === "komunitas" && <Komunitas />}
        {currentPage === "bibliotherapy" && <Bibliotherapy />}
        {currentPage === "kenali-perundungan" && (
          <Education 
            setCurrentPage={setCurrentPage} 
            setSelectedArticleSlug={setSelectedArticleSlug} 
          />
        )}
        {currentPage === "journal" && <Journal setCurrentPage={setCurrentPage} />}
        {currentPage === "cerita" && <Curhat />}
        {currentPage === "faq" && <FAQ />}
        {currentPage === "calmzone" && <CalmZone />}
        {currentPage === "article-detail" && (
          <ArticleDetail 
            selectedArticleSlug={selectedArticleSlug}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </main>
  )
}
