"use client";

import { Hand } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-[#e2dacd]">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#e0710d]/20 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#bb6a48]/20 to-transparent blur-3xl"></div>
      </div>
      
      {/* Logo */}
      <div className="relative z-10 mb-8">
        <div className="w-20 h-20 bg-[#e0710d] rounded-2xl flex items-center justify-center text-white shadow-lg animate-pulse">
          <Hand className="w-12 h-12" />
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
        <div className="w-12 h-12 border-4 border-[#e0710d]/30 border-t-[#e0710d] rounded-full animate-spin"></div>
      </div>
      
      {/* Services Pills */}
      <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-md px-4 relative z-10">
        <span className="px-3 py-1 bg-[#e0710d]/10 text-[#e0710d] rounded-full text-sm">
          Elettricista Milano
        </span>
        <span className="px-3 py-1 bg-[#bb6a48]/10 text-[#bb6a48] rounded-full text-sm">
          Idraulico Milano
        </span>
        <span className="px-3 py-1 bg-[#9a1118]/10 text-[#9a1118] rounded-full text-sm">
          Muratore Milano
        </span>
      </div>
    </div>
  );
}
