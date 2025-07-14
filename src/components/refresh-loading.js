"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePageRefresh } from "@/hooks/use-page-refresh";

export default function RefreshLoading() {
  const isRefreshing = usePageRefresh();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isRefreshing) {
      // Reset progress when loading starts
      setProgress(0);
      
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prevProgress + 2; // Increment by 2% every interval
        });
      }, 40); // Update every 40ms for smooth animation
      
      return () => {
        clearInterval(timer);
      };
    }
  }, [isRefreshing]);

  if (!isRefreshing) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-[#e2e8f0]">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#2563eb]/20 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#1d4ed8]/20 to-transparent blur-3xl"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-[10%] left-[20%] w-6 h-6 bg-[#2563eb]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-[35%] left-[15%] w-10 h-10 bg-[#1d4ed8]/15 rounded-full animate-bounce"></div>
        <div className="absolute top-[65%] left-[10%] w-8 h-8 bg-[#9a1118]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-[85%] left-[25%] w-11 h-11 bg-[#2563eb]/20 rounded-full animate-bounce"></div>
        <div className="absolute top-[15%] right-[25%] w-9 h-9 bg-[#1d4ed8]/15 rounded-full animate-pulse"></div>
        <div className="absolute top-[50%] right-[20%] w-7 h-7 bg-[#9a1118]/10 rounded-full animate-bounce"></div>
        <div className="absolute top-[75%] right-[15%] w-10 h-10 bg-[#2563eb]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-[25%] right-[10%] w-8 h-8 bg-[#1d4ed8]/15 rounded-full animate-bounce"></div>
      </div>
      
      {/* Logo */}
      <div className="relative z-10 mb-10">
        <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center shadow-lg animate-bounce p-3">
          <Image 
            src="/BRICOLLANO-plain-blue.png" 
            alt="Bricollano Logo" 
            width={80} 
            height={80} 
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
      
      {/* Brand Name */}
      <h1 className="text-4xl font-bold text-[#292927] font-playfair mb-6 relative z-10">
        Bricollano
      </h1>
      
      {/* Loading Text */}
      <p className="text-lg text-[#292927]/70 font-outfit mb-10 relative z-10">
        Caricamento servizi casa Milano...
      </p>
      
      {/* Progress Bar */}
      <div className="w-72 h-2 bg-[#e2e8f0] rounded-full overflow-hidden border border-[#2563eb]/30 relative z-10 mb-3">
        <div 
          className="h-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Progress Percentage */}
      <p className="text-sm font-medium text-[#292927]/60 mb-10 font-outfit relative z-10">
        {Math.round(progress)}%
      </p>
      
      {/* Services Pills */}
      <div className="flex flex-wrap justify-center gap-2 max-w-md px-4 relative z-10">
        <span className="px-3 py-1 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm opacity-80 animate-pulse">
          Elettricista Milano
        </span>
        <span className="px-3 py-1 bg-[#1d4ed8]/10 text-[#1d4ed8] rounded-full text-sm opacity-80 animate-pulse delay-200">
          Idraulico Milano
        </span>
        <span className="px-3 py-1 bg-[#9a1118]/10 text-[#9a1118] rounded-full text-sm opacity-80 animate-pulse delay-500">
          Muratore Milano
        </span>
        <span className="px-3 py-1 bg-[#2563eb]/10 text-[#2563eb] rounded-full text-sm opacity-80 animate-pulse delay-700">
          Pagamenti Crypto
        </span>
      </div>
    </div>
  );
}
