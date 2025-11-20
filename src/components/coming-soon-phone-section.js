"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  MotionDiv,
  MotionSection,
  fadeInLeft,
  fadeInRight
} from "@/components/motion-wrapper"

const ComingSoonPhoneSection = () => (
  <MotionSection
    id="coming-soon-phone"
    className="py-20 px-4 bg-gradient-to-br from-[#e2e8f0] to-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-20 md:items-center max-w-7xl">
      {/* Left: Coming Soon Text */}
      <MotionDiv
        className="w-full md:max-w-lg text-center md:text-left md:flex-shrink-0"
        variants={fadeInLeft}
      >
        <span className="inline-block mb-4 px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] rounded-full font-semibold text-sm">Nuovo!</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#292927] mb-4 leading-tight">App Mobile in Arrivo</h2>
        <p className="text-base md:text-lg text-[#292927]/70 mb-6">Stiamo lavorando alla nostra app mobile per rendere i pagamenti crypto e la gestione dei servizi ancora più semplici. Rimani sintonizzato!</p>
        <span className="inline-block px-6 py-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white rounded-full font-semibold shadow-lg">Coming Soon</span>
      </MotionDiv>
      {/* Right: Animated Phone Component */}
      <MotionDiv
        className="w-full md:w-auto flex justify-center md:justify-end"
        variants={fadeInRight}
      >
        <motion.div
          className="w-[170px] md:w-[190px] h-[360px] md:h-[410px] bg-gradient-to-br from-[#292927] to-[#1e40af] rounded-[2rem] md:rounded-[2.5rem] p-1.5 shadow-2xl relative"
          variants={{
            animate: {
              y: [0, -20, 0],
              boxShadow: [
                '0 20px 40px rgba(0,0,0,0.15)',
                '0 40px 80px rgba(0,0,0,0.20)',
                '0 20px 40px rgba(0,0,0,0.15)'
              ],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            },
          }}
          animate="animate"
        >
          <div className="w-full h-full bg-black rounded-[1.75rem] md:rounded-[2.25rem] overflow-hidden relative">
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 md:w-24 h-6 bg-black rounded-b-2xl z-10"></div>
            
            {/* App Screenshot */}
            <Image 
              src="/main-screen.jpeg" 
              alt="Bricollano App" 
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </MotionDiv>
    </div>
  </MotionSection>
)

export default ComingSoonPhoneSection 
