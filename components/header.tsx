"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sage-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Image src="/icon-without-title.png" alt="Youth Anti-Bullying Logo" width={40} height={40} className="object-contain" />
          <span className="text-xl font-bold text-sage-900">Youth Anti-Bullying</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#program" className="text-sm font-medium text-sage-600 hover:text-sage-900 transition-colors">
            Program
          </Link>
          <Link href="#journey" className="text-sm font-medium text-sage-600 hover:text-sage-900 transition-colors">
            Perjalanan
          </Link>
          <Link href="#faq" className="text-sm font-medium text-sage-600 hover:text-sage-900 transition-colors">
            FAQ
          </Link>
          <button className="rounded-full bg-sage-500 px-6 py-2 text-sm font-medium text-white hover:bg-sage-600 transition-colors">
            Bergabung
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-sage-200 bg-white p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="#program" className="text-sm font-medium text-sage-600">
                Program
              </Link>
              <Link href="#journey" className="text-sm font-medium text-sage-600">
                Perjalanan
              </Link>
              <Link href="#faq" className="text-sm font-medium text-sage-600">
                FAQ
              </Link>
              <button className="w-full rounded-full bg-sage-500 px-6 py-2 text-sm font-medium text-white">
                Bergabung
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
