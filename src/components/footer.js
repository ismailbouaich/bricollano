"use client"
//moussiba k7la
import { Mail, Phone, MessageCircle, ChevronUp } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { MotionDiv, MotionSection, fadeInLeft, fadeInUp, fadeInRight, fadeIn, staggerContainer } from "@/components/motion-wrapper"
import { useCallback, useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollTop(scrollTop > 300); // Show after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to a section by id
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 40, // adjust for header if needed
        behavior: "smooth",
      });
    }
  }, []);

  // Service links handler
  const handleServiceClick = useCallback(() => {
    scrollToSection("services");
  }, [scrollToSection]);

  // Payment links handler
  const handlePaymentClick = useCallback(() => {
    scrollToSection("coming-soon-phone");
  }, [scrollToSection]);

  return (
    <>
      {/* Footer */}
      <MotionSection
        id="contact"
        className="bg-[#292927] text-white py-24 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <MotionDiv variants={staggerContainer} className="grid md:grid-cols-4 gap-12">
            <MotionDiv variants={fadeInLeft} className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Image 
                    src="/BRICOLLANO-plain-blue.png" 
                    alt="Bricollano Logo" 
                    width={90} 
                    height={90} 
                    className="w-50 h-14 object-contain"
                  />
                 
                </div>
                <p className="text-[#e2e8f0]/80 text-lg leading-relaxed">
                  La piattaforma leader per servizi di riparazione e manutenzione casa a Milano. Professionisti qualificati a portata di mano.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-[#e2e8f0]/10 rounded-2xl">
                  <div className="w-3 h-3 bg-[#1e40af] rounded-full flex-shrink-0"></div>
                  <span className="text-[#e2e8f0]/90 font-medium">Milano, Lombardia - Italia</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#e2e8f0]/10 rounded-2xl">
                  <div className="w-3 h-3 bg-[#1d4ed8] rounded-full flex-shrink-0"></div>
                  <span className="text-[#e2e8f0]/90 font-medium">Riparazioni e manutenzione in tutta Milano</span>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Servizi Milano</h3>
              <ul className="space-y-4">
                <li onClick={handleServiceClick} className="hover:text-[#2563eb] cursor-pointer text-[#e2e8f0]/80 hover:translate-x-2 transition-all duration-300 py-1">Elettricista Milano</li>
                <li onClick={handleServiceClick} className="hover:text-[#2563eb] cursor-pointer text-[#e2e8f0]/80 hover:translate-x-2 transition-all duration-300 py-1">Idraulico Milano</li>
                <li onClick={handleServiceClick} className="hover:text-[#2563eb] cursor-pointer text-[#e2e8f0]/80 hover:translate-x-2 transition-all duration-300 py-1">Muratore Milano</li>
                <li onClick={handleServiceClick} className="hover:text-[#2563eb] cursor-pointer text-[#e2e8f0]/80 hover:translate-x-2 transition-all duration-300 py-1">Riparazioni Casa</li>
                <li onClick={handleServiceClick} className="hover:text-[#2563eb] cursor-pointer text-[#e2e8f0]/80 hover:translate-x-2 transition-all duration-300 py-1">Manutenzione</li>
              </ul>
            </MotionDiv>
            
            <MotionDiv variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Pagamenti</h3>
              <ul className="space-y-4">
                <li onClick={handlePaymentClick} className="hover:text-[#2563eb] cursor-pointer text-[#e2e8f0]/80 hover:translate-x-2 transition-all duration-300 py-1">Bitcoin</li>
                <li onClick={handlePaymentClick} className="hover:text-[#2563eb] cursor-pointer text-[#e2e8f0]/80 hover:translate-x-2 transition-all duration-300 py-1">Ethereum</li>
                <li onClick={handlePaymentClick} className="hover:text-[#2563eb] cursor-pointer text-[#e2e8f0]/80 hover:translate-x-2 transition-all duration-300 py-1">Sistema Credito</li>
                <li onClick={handlePaymentClick} className="hover:text-[#2563eb] cursor-pointer text-[#e2e8f0]/80 hover:translate-x-2 transition-all duration-300 py-1">Pagamenti Sicuri</li>
              </ul>
            </MotionDiv>
            
            <MotionDiv variants={fadeInRight} className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Contatti</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-[#e2e8f0]/10 rounded-2xl hover:bg-[#e2e8f0]/20 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-[#e2e8f0]/90">bricollano.info@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#e2e8f0]/10 rounded-2xl hover:bg-[#e2e8f0]/20 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-[#2563eb]" />
                  <span className="text-[#e2e8f0]/90">+39 331 290 4233</span>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
          
          <MotionDiv variants={fadeIn} className="border-t border-[#1d4ed8]/30 mt-16 pt-8 text-center">
            <p className="text-[#e2e8f0]/80 text-lg">&copy; 2024 Bricollano. Tutti i diritti riservati.</p>
          </MotionDiv>
        </div>
      </MotionSection>

      {/* WhatsApp Floating Button */}
      <MotionDiv
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button size="lg" className="rounded-full w-16 h-16 bg-[#1d4ed8] hover:bg-[#2563eb] shadow-lg" asChild>
          <a
            href="https://wa.me/393312904233"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contattaci su WhatsApp"
          >
            
            <FaWhatsapp className="w-12 h-12" />
          </a>
        </Button>
      </MotionDiv>

      {/* Scroll to Top Button */}
      <MotionDiv
        className="fixed bottom-24 right-6 z-50"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ 
          scale: showScrollTop ? 1 : 0, 
          rotate: showScrollTop ? 0 : 180 
        }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button 
          size="lg" 
          className="rounded-full w-16 h-16 bg-[#1d4ed8] hover:bg-[#2563eb] shadow-lg" 
          onClick={scrollToTop}
          aria-label="Torna in cima"
        >
          <ChevronUp className="w-12 h-12" />
        </Button>
      </MotionDiv>
    </>
  )
}
