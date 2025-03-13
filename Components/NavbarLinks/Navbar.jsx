"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import SwanSortlogo from "@/public/SwanSorter_Logo-02.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-[90%] max-w-7xl mx-auto my-4">
      <div className="flex justify-between items-center px-4 py-2 text-white rounded-lg 
                      backdrop-blur-lg bg-white/10 shadow-lg">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <Image src={SwanSortlogo} alt="SwanSorter Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">SwanSorter</h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex gap-6 text-lg font-semibold"
        >
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/solutions" className="hover:text-gray-300 transition">Solutions</Link>
          <Link href="/company" className="hover:text-gray-300 transition">Company</Link>
          <Link href="/news" className="hover:text-gray-300 transition">News</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden flex flex-col backdrop-blur-lg bg-white/10 text-white mt-2 rounded-lg shadow-md p-4 space-y-4"
        >
          <Link href="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/solutions" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link href="/company" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Company</Link>
          <Link href="/news" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>News</Link>
          <Link href="/contact" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};
