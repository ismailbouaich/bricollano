"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-[#e2e8f0]">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#2563eb]/20 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#1d4ed8]/20 to-transparent blur-3xl"></div>
      </div>
      
      {/* Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg animate-pulse p-3">
          <Image 
            src="/BRICOLLANO-plain-blue.png" 
            alt="Bricollano Logo" 
            width={64} 
            height={64} 
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>
      
      {/* Brand Name */}
      <h1 className="text-3xl font-bold text-[#292927] font-playfair mb-4 relative z-10">
        Bricollano
      </h1>
      
      {/* Loading Text */}
      <p className="text-lg text-[#292927]/70 font-outfit mb-8 relative z-10">
        Caricamento servizi casa Milano...
      </p>
      
      {/* Simple Spinner */}
      <div className="relative z-10">
        <div className="w-12 h-12 border-4 border-[#2563eb]/30 border-t-[#2563eb] rounded-full animate-spin"></div>
      </div>
      
      {/* Services Pills */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-md px-4 relative z-10">
        <span className="px-3 py-1 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm">
          Elettricista Milano
        </span>
        <span className="px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-sm">
          Idraulico Milano
        </span>
        <span className="px-3 py-1 bg-[#1e40af]/10 text-[#1e40af] rounded-full text-sm">
          Muratore Milano
        </span>
      </div>
    </div>
  );
}
