"use client"

import { motion } from "framer-motion"
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
          className="w-60 md:w-64 h-[420px] md:h-[500px] bg-gradient-to-br from-[#292927] to-[#1e40af] rounded-[2.5rem] md:rounded-[3rem] p-2 shadow-2xl relative"
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
          <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-28 md:w-32 h-6 bg-[#292927] rounded-full"></div>
            <div className="pt-12 md:pt-16 px-4 md:px-6">
              <div className="text-center mb-6 md:mb-8">
                <div className="w-14 md:w-16 h-14 md:h-16 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">₿</span>
                </div>
                <h3 className="font-bold text-[#292927]">Bricollano</h3>
                <p className="text-sm text-[#292927]/70">Version 2.1.0</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between p-3 bg-[#e2e8f0]/30 rounded-lg">
                  <span className="text-sm text-[#292927]/70">Hair Salon</span>
                  <span className="text-sm font-bold text-[#2563eb]">0.002 BTC</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#e2e8f0]/30 rounded-lg">
                  <span className="text-sm text-[#292927]/70">Car Service</span>
                  <span className="text-sm font-bold text-[#1d4ed8]">0.015 ETH</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#e2e8f0]/30 rounded-lg">
                  <span className="text-sm text-[#292927]/70">Home Cleaning</span>
                  <span className="text-sm font-bold text-[#1e40af]">150 USDT</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </MotionDiv>
    </div>
  </MotionSection>
)

export default ComingSoonPhoneSection 