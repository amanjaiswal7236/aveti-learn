"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full top-0 z-50 bg-[#070823]/80 backdrop-blur-sm border-b border-[#7C7D87]/20"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#84BC54]">
          <Image
            src="/aveti-logo.png"
            alt="Aveti-Learning"
            width={150} 
            height={40}
          />
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/about" className="text-white hover:text-[#84BC54] transition-colors">
            About
          </Link>
          <Link href="/courses" className="text-white hover:text-[#84BC54] transition-colors">
            Courses
          </Link>
          <Link href="/join" className="text-white hover:text-[#84BC54] transition-colors">
            Join Us
          </Link>
          <Link href="/join">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#84BC54] text-[#070823] px-6 py-2 rounded-full font-medium"
          >
            Start Learning
          </motion.button>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}