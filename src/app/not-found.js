"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#e2e8f0] flex flex-col items-center justify-center p-5 text-center">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-8"
      >
        <Image 
          src="/BRICOLLANO-plain-blue.png" 
          alt="Bricollano Logo" 
          width={48} 
          height={48} 
          className="w-12 h-12 mr-3 object-contain"
        />
        <span className="text-4xl font-bold text-[#292927]">Bricollano</span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-6xl md:text-7xl font-bold text-[#2563eb] mb-6"
      >
        404
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-md mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[#292927] mb-4">
          Pagina Non Trovata
        </h2>
        <p className="text-lg text-[#292927]/70 mb-8">
          Ci dispiace, la pagina che stai cercando non esiste. Potrebbe essere stata spostata o eliminata.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/">
          <Button 
            size="lg" 
            className="bg-[#2563eb] text-white hover:bg-[#1d4ed8] hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl"
          >
            Torna alla Home
          </Button>
        </Link>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16 text-sm text-[#292927]/50"
      >
        &copy; {new Date().getFullYear()} Bricollano. Tutti i diritti riservati.
      </motion.div>
    </div>
  );
}
