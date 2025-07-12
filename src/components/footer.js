"use client"

import { Mail, Phone, Hand, MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import { MotionDiv, MotionSection, fadeInLeft, fadeInUp, fadeInRight, fadeIn, staggerContainer } from "@/components/motion-wrapper"

export default function Footer() {
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
                  <Hand className="w-10 h-10 text-[#e0710d]" />
                  <span className="text-3xl font-bold">Cappomano</span>
                </div>
                <p className="text-[#e2dacd]/80 text-lg leading-relaxed">
                  La piattaforma innovativa per servizi domestici con pagamenti crypto. Tutto a portata di mano.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-[#e2dacd]/10 rounded-2xl">
                  <div className="w-3 h-3 bg-[#9a1118] rounded-full flex-shrink-0"></div>
                  <span className="text-[#e2dacd]/90 font-medium">Milano, Lombardia - Italia</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#e2dacd]/10 rounded-2xl">
                  <div className="w-3 h-3 bg-[#bb6a48] rounded-full flex-shrink-0"></div>
                  <span className="text-[#e2dacd]/90 font-medium">Servizi attivi in Milano e Provincia</span>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Servizi</h3>
              <ul className="space-y-4">
                <li className="hover:text-[#e0710d] cursor-pointer text-[#e2dacd]/80 hover:translate-x-2 transition-all duration-300 py-1">Bricolage</li>
                <li className="hover:text-[#e0710d] cursor-pointer text-[#e2dacd]/80 hover:translate-x-2 transition-all duration-300 py-1">Jardinage</li>
                <li className="hover:text-[#e0710d] cursor-pointer text-[#e2dacd]/80 hover:translate-x-2 transition-all duration-300 py-1">Ménage</li>
                <li className="hover:text-[#e0710d] cursor-pointer text-[#e2dacd]/80 hover:translate-x-2 transition-all duration-300 py-1">Déménagement</li>
                <li className="hover:text-[#e0710d] cursor-pointer text-[#e2dacd]/80 hover:translate-x-2 transition-all duration-300 py-1">Aide à domicile</li>
                <li className="hover:text-[#e0710d] cursor-pointer text-[#e2dacd]/80 hover:translate-x-2 transition-all duration-300 py-1">Garde d&apos;animaux</li>
              </ul>
            </MotionDiv>
            
            <MotionDiv variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Pagamenti</h3>
              <ul className="space-y-4">
                <li className="hover:text-[#e0710d] cursor-pointer text-[#e2dacd]/80 hover:translate-x-2 transition-all duration-300 py-1">Bitcoin</li>
                <li className="hover:text-[#e0710d] cursor-pointer text-[#e2dacd]/80 hover:translate-x-2 transition-all duration-300 py-1">Ethereum</li>
                <li className="hover:text-[#e0710d] cursor-pointer text-[#e2dacd]/80 hover:translate-x-2 transition-all duration-300 py-1">Sistema Credito</li>
                <li className="hover:text-[#e0710d] cursor-pointer text-[#e2dacd]/80 hover:translate-x-2 transition-all duration-300 py-1">Pagamenti Sicuri</li>
              </ul>
            </MotionDiv>
            
            <MotionDiv variants={fadeInRight} className="space-y-6">
              <h3 className="text-2xl font-bold mb-4">Contatti</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-[#e2dacd]/10 rounded-2xl hover:bg-[#e2dacd]/20 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-[#e0710d]" />
                  <span className="text-[#e2dacd]/90">info@cappomano.it</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-[#e2dacd]/10 rounded-2xl hover:bg-[#e2dacd]/20 transition-colors cursor-pointer">
                  <Phone className="w-5 h-5 text-[#e0710d]" />
                  <span className="text-[#e2dacd]/90">+39 123 456 7890</span>
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
          
          <MotionDiv variants={fadeIn} className="border-t border-[#bb6a48]/30 mt-16 pt-8 text-center">
            <p className="text-[#e2dacd]/80 text-lg">&copy; 2024 Cappomano. Tutti i diritti riservati.</p>
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
        <Button size="lg" className="rounded-full w-16 h-16 bg-[#bb6a48] hover:bg-[#e0710d] shadow-lg" asChild>
          <a
            href="https://wa.me/393312904133"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contattaci su WhatsApp"
          >
            
            <FaWhatsapp className="w-12 h-12" />
          </a>
        </Button>
      </MotionDiv>
    </>
  )
}
