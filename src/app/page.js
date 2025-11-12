"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bitcoin, CreditCard, Shield, Zap, Menu, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import ContactForm from "@/components/contact-form"
import { useRef, useState, useEffect,useCallback } from "react"
import EmblaServicesSlider from "@/components/embla-services-slider"
import ComingSoonPhoneSection from "@/components/coming-soon-phone-section"
import Footer from "@/components/footer"
import PageSEO from "@/components/page-seo"
import MetaTags from "@/components/meta-tags"
import {
  MotionDiv,
  MotionSection,
  MotionH1,
  MotionH2,
  MotionP,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  fadeIn,
  staggerContainer,
  slideInFromBottom,
  bounceIn,
} from "@/components/motion-wrapper"
import { motion } from "framer-motion"

export default function LandingPage() {
  const features = [
    {
      icon: <Bitcoin className="w-6 h-6" />,
      title: "Pagamenti Innovativi",
      description: "Primo a Milano ad accettare Bitcoin, Ethereum e pagamenti crypto per servizi casa",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Credito Flessibile",
      description: "Sistema di credito personalizzato per riparazioni e manutenzione casa a Milano",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Professionisti Certificati",
      description: "Elettricisti, idraulici e muratori qualificati e verificati a Milano",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Servizio Rapido",
      description: "Interventi veloci per riparazioni urgenti in tutta Milano e provincia",
    },
  ]

  const [selectedService, setSelectedService] = useState("");
  const contactFormRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Hydration fix: Only enable client-side features after component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Helper function to handle smooth scrolling to sections
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80;
      const elementPosition = section.offsetTop - headerHeight;
      
      // Close the sheet first
      setIsSheetOpen(false);
      
      // Wait for sheet animation to complete, then scroll
      setTimeout(() => {
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }, 350); // Increased delay to ensure sheet is fully closed
    }
  }, []);

  const handleBookService = (service) => {
    // Convert service name to the format expected by the dropdown (lowercase with hyphens)
    const formattedService = service.toLowerCase().replace(/\s+/g, "-");
    setSelectedService(formattedService);
    // Scroll to contact form
    setTimeout(() => {
      if (contactFormRef.current) {
        contactFormRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Wait for state update/render
  };

  // Handle scroll to services section
  const handleIniziaOraClick = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = servicesSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#e2e8f0] overflow-x-hidden">
      {/* Add SEO enhancements */}
      <PageSEO />
      <MetaTags />
      
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-md border-b border-[#1d4ed8]/20 sticky top-0 z-40"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <Image 
                src="/BRICOLLANO-plain-blue.png" 
                alt="Bricollano Logo" 
                width={80} 
                height={80} 
                className="w-50 h-14 object-contain"
              />
            </MotionDiv>

            {/* Desktop Navigation */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex items-center space-x-8 font-outfit"
            >
              <Link href="#services" className="text-[#292927]/70 hover:text-[#292927] transition-colors">
                Servizi
              </Link>
              <Link href="#features" className="text-[#292927]/70 hover:text-[#292927] transition-colors">
                Caratteristiche
              </Link>
              <Link href="#about" className="text-[#292927]/70 hover:text-[#292927] transition-colors">
                Chi Siamo
              </Link>
              <Link href="#contact-form" className="text-[#292927]/70 hover:text-[#292927] transition-colors">
                Contatti
              </Link>
            </MotionDiv>

            {/* Mobile Menu Button */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:scale-110 transition-transform">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-center">
                    <Image 
                      src="/BRICOLLANO-plain-blue.png" 
                      alt="Bricollano Logo" 
                      width={70} 
                      height={70} 
                      className="w-50 h-12 object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-12 px-4 overflow-y-auto max-h-[calc(100vh-120px)] pb-6">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-center text-xl font-semibold text-[#292927] hover:text-[#2563eb] py-4 px-6 rounded-2xl hover:bg-[#e2e8f0]/20 transition-all duration-300 border border-transparent hover:border-[#2563eb]/20"
                  >
                    Servizi
                  </button>
                  <button
                    onClick={() => scrollToSection("features")}
                    className="text-center text-xl font-semibold text-[#292927] hover:text-[#2563eb] py-4 px-6 rounded-2xl hover:bg-[#e2e8f0]/20 transition-all duration-300 border border-transparent hover:border-[#2563eb]/20"
                  >
                    Caratteristiche
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-center text-xl font-semibold text-[#292927] hover:text-[#2563eb] py-4 px-6 rounded-2xl hover:bg-[#e2e8f0]/20 transition-all duration-300 border border-transparent hover:border-[#2563eb]/20"
                  >
                    Chi Siamo
                  </button>
                  <button
                    onClick={() => scrollToSection("contact-form")}
                    className="text-center text-xl font-semibold text-[#292927] hover:text-[#2563eb] py-4 px-6 rounded-2xl hover:bg-[#e2e8f0]/20 transition-all duration-300 border border-transparent hover:border-[#2563eb]/20"
                  >
                    Contatti
                  </button>
                  <div className="pt-6">
                    <p className="text-center text-sm text-gray-500 mb-4">Contattaci direttamente:</p>
                    <SheetClose asChild>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent hover:scale-105 transition-transform border-[#2563eb]/30 hover:border-[#2563eb] py-6 text-lg font-semibold rounded-2xl"
                        asChild
                      >
                        <a
                          href="https://wa.me/393312904233"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span>WhatsApp</span>
                        </a>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </MotionDiv>

      {/* Hero Section */}
      <MotionSection 
        initial="hidden" 
        animate="visible" 
        variants={staggerContainer} 
        className="py-14 px-4 relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#e2e8f0]"></div>
          
          {/* Animated Elements - Client-side only to prevent hydration mismatch */}
          {isMounted && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 2 }}
              className="absolute inset-0"
            >
              {/* Floating particles - Use pre-defined values instead of random to avoid hydration issues */}
              {[
                { size: 25, top: '10%', left: '20%', yOffset: -80, xOffset: 30, duration: 18, color: 'bg-[#2563eb]/20' },
                { size: 40, top: '35%', left: '15%', yOffset: -120, xOffset: -40, duration: 22, color: 'bg-[#1d4ed8]/15' },
                { size: 30, top: '65%', left: '10%', yOffset: -70, xOffset: 15, duration: 19, color: 'bg-[#1e40af]/10' },
                { size: 45, top: '85%', left: '25%', yOffset: -100, xOffset: -20, duration: 21, color: 'bg-[#2563eb]/20' },
                { size: 35, top: '15%', left: '45%', yOffset: -90, xOffset: 25, duration: 20, color: 'bg-[#1d4ed8]/15' },
                { size: 28, top: '50%', left: '40%', yOffset: -110, xOffset: -35, duration: 23, color: 'bg-[#1e40af]/10' },
                { size: 42, top: '75%', left: '55%', yOffset: -75, xOffset: 40, duration: 17, color: 'bg-[#2563eb]/20' },
                { size: 32, top: '25%', left: '70%', yOffset: -95, xOffset: -25, duration: 19, color: 'bg-[#1d4ed8]/15' },
                { size: 38, top: '60%', left: '75%', yOffset: -85, xOffset: 30, duration: 20, color: 'bg-[#1e40af]/10' },
                { size: 36, top: '40%', left: '90%', yOffset: -105, xOffset: -20, duration: 18, color: 'bg-[#2563eb]/20' },
                { size: 26, top: '80%', left: '85%', yOffset: -65, xOffset: 10, duration: 21, color: 'bg-[#1d4ed8]/15' },
                { size: 34, top: '5%', left: '60%', yOffset: -115, xOffset: -30, duration: 22, color: 'bg-[#1e40af]/10' },
              ].map((particle, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full ${particle.color}`}
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    top: particle.top,
                    left: particle.left,
                  }}
                  animate={{
                    y: [0, particle.yOffset],
                    x: [0, particle.xOffset],
                    opacity: [0.7, 0],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
              
              {/* Gradient Orbs */}
              <motion.div 
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#2563eb]/20 to-transparent blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div 
                className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-[#1d4ed8]/20 to-transparent blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2,
                }}
              />
            </MotionDiv>
          )}
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-12">
            <MotionDiv variants={bounceIn} className="flex justify-center">
              <Badge className="mb-6 bg-[#2563eb]/10 text-[#2563eb] border-[#2563eb]/20 hover:bg-[#2563eb]/20 px-6 py-3 text-lg font-semibold rounded-2xl">
                🚀 Pagamenti Crypto Accettati
              </Badge>
            </MotionDiv>
            
            <div className="space-y-8">
              <MotionH1 variants={fadeInUp} className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#292927] leading-tight">
                Riparazioni e Manutenzione
                <span className="text-[#2563eb] block mt-2">
                  Casa a Milano
                </span>
              </MotionH1>
              <MotionP variants={fadeInUp} className="font-outfit text-xl lg:text-2xl text-[#292927]/70 leading-relaxed max-w-4xl mx-auto">
                Bricollano è la piattaforma leader per servizi di riparazione e manutenzione casa a Milano. 
                Elettricisti, idraulici e muratori qualificati con pagamenti innovativi crypto e credito flessibile.
              </MotionP>
            </div>
            
            <MotionDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-[#2563eb] text-white hover:bg-[#1d4ed8] hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl"
              >
                <Bitcoin className="w-6 h-6 mr-3" />
                Richiedi Preventivo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#292927] text-[#292927] hover:bg-[#292927] hover:text-white hover:scale-105 transition-all duration-300 bg-transparent px-8 py-6 text-lg font-semibold rounded-2xl"
              >
                <CreditCard className="w-6 h-6 mr-3" />
                Chiamaci Ora
              </Button>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Services Slider Section */}
      <MotionSection
        id="services"
        className="py-32 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="container mx-auto max-w-7xl">
          <MotionDiv variants={fadeInUp} className="text-center mb-20">
            <div className="space-y-8">
              <MotionH2 variants={fadeInUp} className="font-playfair text-4xl lg:text-5xl font-bold text-[#292927] leading-tight">
                Servizi Professionali a Milano
              </MotionH2>
              <MotionP variants={fadeInUp} className="font-outfit text-xl lg:text-2xl text-[#292927]/70 leading-relaxed max-w-3xl mx-auto">
                Elettricisti, idraulici e muratori qualificati per ogni esigenza della tua casa a Milano e provincia
              </MotionP>
            </div>
          </MotionDiv>
          <EmblaServicesSlider onBook={handleBookService} />
        </div>
      </MotionSection>

      {/* Features Section */}
      <MotionSection
        id="features"
        className="py-32 px-4 bg-[#e2e8f0]/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <MotionDiv variants={fadeInUp} className="text-center mb-20">
            <div className="space-y-8">
              <MotionH2 variants={fadeInUp} className="font-playfair text-4xl lg:text-5xl font-bold text-[#292927] leading-tight">
                Perché Scegliere Bricollano Milano
              </MotionH2>
              <MotionP variants={fadeInUp} className="font-outfit text-xl lg:text-2xl text-[#292927]/70 leading-relaxed max-w-3xl mx-auto">
                Innovazione, qualità e affidabilità per i tuoi servizi di riparazione e manutenzione casa
              </MotionP>
            </div>
          </MotionDiv>
          <MotionDiv variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <MotionDiv key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="text-center h-full">
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#e2e8f0]/30 space-y-6 h-full flex flex-col">
                  <MotionDiv
                    className="w-20 h-20 bg-[#2563eb] rounded-2xl flex items-center justify-center text-white mx-auto"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    {feature.icon}
                  </MotionDiv>
                  <div className="space-y-3 flex-1 flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#292927]">{feature.title}</h3>
                    <p className="text-[#292927]/70 leading-relaxed flex-1">{feature.description}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </MotionSection>

      {/* About Us Section */}
      <MotionSection
        id="about"
        className="py-32 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <MotionDiv variants={fadeInLeft} className="space-y-12">
              {/* Header Section */}
              <div className="space-y-8">
                <MotionH2 variants={fadeInUp} className="font-playfair text-4xl lg:text-5xl font-bold text-[#292927] leading-tight mb-6">
                  Chi Siamo
                </MotionH2>
                <div className="space-y-6">
                  <MotionP variants={fadeInUp} className="font-outfit text-lg lg:text-xl text-[#292927]/70 leading-relaxed">
                    <strong className="text-[#2563eb] font-semibold">Bricollano</strong> è la piattaforma leader per servizi di riparazione e manutenzione casa a Milano.
                    Operiamo in tutta la città, dai Navigli al Duomo, da Porta Romana a Brera.
                  </MotionP>
                  <MotionP variants={fadeInUp} className="font-outfit text-lg lg:text-xl text-[#292927]/70 leading-relaxed">
                    I nostri elettricisti, idraulici e muratori qualificati garantiscono interventi professionali con tecnologie di pagamento innovative,
                    incluse criptovalute e sistemi di credito flessibili per le famiglie milanesi.
                  </MotionP>
                </div>
              </div>

              {/* Key Features Section */}
              <MotionDiv variants={fadeInUp} className="space-y-5">
                <h3 className="font-playfair text-2xl font-bold text-[#292927] mb-6">I Nostri Servizi a Milano</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-5 p-5 bg-[#e2e8f0]/20 rounded-2xl border border-[#e2e8f0]/30 hover:bg-[#e2e8f0]/30 transition-colors">
                    <div className="w-4 h-4 bg-[#2563eb] rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="font-outfit text-[#292927] font-semibold mb-2">Elettricista Milano</p>
                      <p className="text-[#292927]/70 leading-relaxed">Impianti elettrici, riparazioni urgenti e installazioni certificate in tutta Milano</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5 p-5 bg-[#e2e8f0]/20 rounded-2xl border border-[#e2e8f0]/30 hover:bg-[#e2e8f0]/30 transition-colors">
                    <div className="w-4 h-4 bg-[#1e40af] rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#292927] font-semibold mb-2">Idraulico Milano</p>
                      <p className="text-[#292927]/70 leading-relaxed">Riparazioni idrauliche, installazioni e manutenzione impianti in tutta la città</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5 p-5 bg-[#e2e8f0]/20 rounded-2xl border border-[#e2e8f0]/30 hover:bg-[#e2e8f0]/30 transition-colors">
                    <div className="w-4 h-4 bg-[#1d4ed8] rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#292927] font-semibold mb-2">Muratore Milano</p>
                      <p className="text-[#292927]/70 leading-relaxed">Ristrutturazioni, riparazioni murarie e lavori di manutenzione edilizia</p>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </MotionDiv>

            {/* Right Column - Visual Card */}
            <MotionDiv variants={fadeInRight} className="relative lg:pl-8">
              <div className="bg-[#e2e8f0]/40 rounded-3xl p-10 lg:p-12 shadow-lg border border-[#e2e8f0]/50">
                {/* Header */}
                <div className="text-center mb-10">
                  <Image 
                    src="/BRICOLLANO-logo-blue.png" 
                    alt="Bricollano Logo" 
                    width={128} 
                    height={128} 
                    className="w-32 h-32 mx-auto mb-8 object-contain"
                  />
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#292927] mb-4">Bricollano Milano</h3>
                  <p className="text-[#292927]/70 text-lg font-medium">Servizi professionali di riparazione e manutenzione casa</p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e2e8f0]/30">
                    <div className="flex items-center space-x-5">
                      <div className="w-5 h-5 bg-[#1e40af] rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-[#292927] mb-1 text-lg">Sede Principale</p>
                        <p className="text-[#292927]/70">Milano, Lombardia</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e2e8f0]/30">
                    <div className="flex items-center space-x-5">
                      <div className="w-5 h-5 bg-[#1d4ed8] rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-[#292927] mb-1 text-lg">Servizi Attivi</p>
                        <p className="text-[#292927]/70">Milano e Provincia</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e2e8f0]/30">
                    <div className="flex items-center space-x-5">
                      <div className="w-5 h-5 bg-[#2563eb] rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-[#292927] mb-1 text-lg">Espansione</p>
                        <p className="text-[#292927]/70">Presto in tutta Italia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#2563eb] rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#1d4ed8] rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 bg-[#1e40af] rounded-full opacity-15"></div>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Stats Section */}
      <MotionSection
        className="py-32 px-4 bg-[#2563eb]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <MotionDiv variants={staggerContainer} className="grid md:grid-cols-3 gap-12 text-center">
            <MotionDiv variants={slideInFromBottom}>
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <MotionDiv
                  className="text-5xl lg:text-6xl font-bold mb-4 text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                  viewport={{ once: true }}
                >
                  1000+
                </MotionDiv>
                <div className="text-xl lg:text-2xl font-semibold text-white/90">Servizi Completati</div>
              </div>
            </MotionDiv>
            <MotionDiv variants={slideInFromBottom}>
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <MotionDiv
                  className="text-5xl lg:text-6xl font-bold mb-4 text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.5 }}
                  viewport={{ once: true }}
                >
                  500+
                </MotionDiv>
                <div className="text-xl lg:text-2xl font-semibold text-white/90">Clienti Soddisfatti</div>
              </div>
            </MotionDiv>
            <MotionDiv variants={slideInFromBottom}>
              <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <MotionDiv
                  className="text-5xl lg:text-6xl font-bold mb-4 text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.5 }}
                  viewport={{ once: true }}
                >
                  50+
                </MotionDiv>
                <div className="text-xl lg:text-2xl font-semibold text-white/90">Professionisti Verificati</div>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>
      </MotionSection>
      <ComingSoonPhoneSection />

      {/* Contact Form Section */}
      <MotionSection
        id="contact-form"
        className="py-32 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        ref={contactFormRef}
        itemScope
        itemType="https://schema.org/ContactPoint"
      >
        <div className="container mx-auto max-w-7xl">
          <ContactForm initialService={selectedService} />
        </div>
      </MotionSection>


      {/* CTA Section */}
      <MotionSection
        className="py-32 px-4 bg-[#2563eb] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#2563eb]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2563eb] via-[#2563eb] to-[#1d4ed8] opacity-90"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#292927]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
            <div className="w-full h-full" style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px"
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <div className="space-y-8">
              <MotionH2 variants={fadeInUp} className="font-playfair text-4xl lg:text-5xl font-bold text-white leading-tight">
                Hai bisogno di riparazioni a Milano?
              </MotionH2>
              <MotionP variants={fadeInUp} className="font-outfit text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Contatta i nostri professionisti per servizi di elettricista, idraulico e muratore a Milano
              </MotionP>
              <MotionDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button
                  size="lg"
                  className="bg-white text-[#2563eb] hover:bg-[#e2e8f0] hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl"
                >
                  Richiedi Preventivo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2563eb] hover:scale-105 transition-all duration-300 bg-transparent px-8 py-6 text-lg font-semibold rounded-2xl"
                >
                  Chiamaci Ora
                </Button>
              </MotionDiv>
            </div>
          </div>
        </div>
      </MotionSection>
        {/* Map Section - Milan */}
        <MotionSection
        className="py-32 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left: Text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="inline-block w-16 h-2 rounded-full bg-[#2563eb]"></span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#292927] leading-tight">
                  Dove Operiamo a <span className="text-[#2563eb]">Milano</span>
                </h2>
                <p className="text-xl lg:text-2xl text-[#292927]/70 leading-relaxed">
                  <span className="font-semibold text-[#2563eb]">Bricollano opera in tutta Milano e provincia</span> con servizi di riparazione e manutenzione casa.
                </p>
              </div>
              <div className="bg-[#2563eb]/10 border border-[#2563eb]/20 rounded-3xl p-8 space-y-4">
                <p className="text-lg text-[#292927] leading-relaxed">
                  I nostri professionisti intervengono in tutti i quartieri milanesi: 
                  <span className="text-[#1e40af] font-semibold"> Navigli, Porta Romana, Duomo, Brera, Isola, Città Studi, Lambrate</span> e molto altro!
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
                    <span className="text-sm font-medium text-[#292927]">Centro Storico</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="w-3 h-3 bg-[#1e40af] rounded-full"></div>
                    <span className="text-sm font-medium text-[#292927]">Navigli</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="w-3 h-3 bg-[#1d4ed8] rounded-full"></div>
                    <span className="text-sm font-medium text-[#292927]">Porta Romana</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
                    <span className="text-sm font-medium text-[#292927]">Brera</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="w-3 h-3 bg-[#1e40af] rounded-full"></div>
                    <span className="text-sm font-medium text-[#292927]">Isola</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="w-3 h-3 bg-[#1d4ed8] rounded-full"></div>
                    <span className="text-sm font-medium text-[#292927]">Città Studi</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Map */}
            <div className="relative">
              <div className="bg-[#e2e8f0]/20 rounded-3xl p-6 border border-[#e2e8f0]/30">
                <div className="h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-[#e2e8f0]/50">
                  <iframe
                    title="Mappa Milano"
                    src="https://www.google.com/maps?q=Milano,+Italia&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2563eb] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#1d4ed8] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>      </MotionSection>

      {/* Footer */}
      <Footer />
     
    </div>
  )
}
