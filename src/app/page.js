"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bitcoin, CreditCard, Shield, Zap, Menu, Hand, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import ContactForm from "@/components/contact-form"
import { useRef, useState } from "react"
import EmblaServicesSlider from "@/components/embla-services-slider"
import ComingSoonPhoneSection from "@/components/coming-soon-phone-section"
import Footer from "@/components/footer"
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
      title: "Pagamenti Crypto",
      description: "Accettiamo Bitcoin, Ethereum e altre criptovalute",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Credito Flessibile",
      description: "Sistema di credito integrato per pagamenti dilazionati",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sicurezza Garantita",
      description: "Transazioni sicure e professionisti verificati",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Prenotazione Rapida",
      description: "Prenota i servizi in pochi click",
    },
  ]

  const [selectedService, setSelectedService] = useState("");
  const contactFormRef = useRef(null);

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

  return (
    <div className="min-h-screen bg-[#e2dacd] overflow-x-hidden">
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-md border-b border-[#bb6a48]/20 sticky top-0 z-40"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <Hand className="w-8 h-8 text-[#e0710d]" />
              <span className="text-2xl font-bold text-[#292927]">Cappomano</span>
            </MotionDiv>

            {/* Desktop Navigation */}
            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden md:flex items-center space-x-8"
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
              <Button className="bg-[#e0710d] text-white hover:bg-[#bb6a48] hover:scale-105 transition-transform">Inizia Ora</Button>
            </MotionDiv>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:scale-110 transition-transform">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <Hand className="w-6 h-6 text-[#e0710d]" />
                    <span>Cappomano</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  <SheetClose asChild>
                    <Link
                      href="#services"
                      className="text-lg font-medium text-[#292927]/70 hover:text-[#292927] py-2 hover:translate-x-2 transition-all duration-300"
                    >
                      Servizi
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#features"
                      className="text-lg font-medium text-[#292927]/70 hover:text-[#292927] py-2 hover:translate-x-2 transition-all duration-300"
                    >
                      Caratteristiche
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#about"
                      className="text-lg font-medium text-[#292927]/70 hover:text-[#292927] py-2 hover:translate-x-2 transition-all duration-300"
                    >
                      Chi Siamo
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="#contact-form"
                      className="text-lg font-medium text-[#292927]/70 hover:text-[#292927] py-2 hover:translate-x-2 transition-all duration-300"
                    >
                      Contatti
                    </Link>
                  </SheetClose>
                  <div className="pt-4 border-t">
                    <SheetClose asChild>
                      <Button className="w-full bg-[#e0710d] text-white hover:bg-[#bb6a48] hover:scale-105 transition-transform">
                        Inizia Ora
                      </Button>
                    </SheetClose>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-gray-500 mb-4">Contattaci direttamente:</p>
                    <SheetClose asChild>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent hover:scale-105 transition-transform"
                        asChild
                      >
                        <a
                          href="https://wa.me/393123456789"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <MessageCircle className="w-4 h-4" />
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
      <MotionSection initial="hidden" animate="visible" variants={staggerContainer} className="py-14 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-12">
            <MotionDiv variants={bounceIn} className="flex justify-center">
              <Badge className="mb-6 bg-[#e0710d]/10 text-[#e0710d] border-[#e0710d]/20 hover:bg-[#e0710d]/20 px-6 py-3 text-lg font-semibold rounded-2xl">
                🚀 Pagamenti Crypto Accettati
              </Badge>
            </MotionDiv>
            
            <div className="space-y-8">
              <MotionH1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#292927] leading-tight">
                Servizi per la Casa con
                <span className="text-[#e0710d] block mt-2">
                  Cappomano
                </span>
              </MotionH1>
              <MotionP variants={fadeInUp} className="text-xl lg:text-2xl text-[#292927]/70 leading-relaxed max-w-4xl mx-auto">
                La prima piattaforma italiana che unisce servizi domestici professionali con pagamenti in criptovalute e
                sistema di credito integrato. Con Cappomano, tutto è a portata di mano.
              </MotionP>
            </div>
            
            <MotionDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-[#e0710d] text-white hover:bg-[#bb6a48] hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl"
              >
                <Bitcoin className="w-6 h-6 mr-3" />
                Prenota con Crypto
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#292927] text-[#292927] hover:bg-[#292927] hover:text-white hover:scale-105 transition-all duration-300 bg-transparent px-8 py-6 text-lg font-semibold rounded-2xl"
              >
                <CreditCard className="w-6 h-6 mr-3" />
                Usa il Credito
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
      >
        <div className="container mx-auto max-w-7xl">
          <MotionDiv variants={fadeInUp} className="text-center mb-20">
            <div className="space-y-8">
              <MotionH2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-[#292927] leading-tight">
                I Nostri Servizi
              </MotionH2>
              <MotionP variants={fadeInUp} className="text-xl lg:text-2xl text-[#292927]/70 leading-relaxed max-w-3xl mx-auto">
                Professionisti verificati per ogni esigenza della tua casa, tutto con Cappomano
              </MotionP>
            </div>
          </MotionDiv>
          <EmblaServicesSlider onBook={handleBookService} />
        </div>
      </MotionSection>

      {/* Features Section */}
      <MotionSection
        id="features"
        className="py-32 px-4 bg-[#e2dacd]/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-7xl">
          <MotionDiv variants={fadeInUp} className="text-center mb-20">
            <div className="space-y-8">
              <MotionH2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-[#292927] leading-tight">
                Perché Scegliere Cappomano
              </MotionH2>
              <MotionP variants={fadeInUp} className="text-xl lg:text-2xl text-[#292927]/70 leading-relaxed max-w-3xl mx-auto">
                Innovazione e sicurezza per i tuoi pagamenti
              </MotionP>
            </div>
          </MotionDiv>
          <MotionDiv variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <MotionDiv key={index} variants={fadeInUp} whileHover={{ y: -10 }} className="text-center">
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#e2dacd]/30 space-y-6">
                  <MotionDiv
                    className="w-20 h-20 bg-[#e0710d] rounded-2xl flex items-center justify-center text-white mx-auto"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.6 },
                    }}
                  >
                    {feature.icon}
                  </MotionDiv>
                  <div className="space-y-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#292927]">{feature.title}</h3>
                    <p className="text-[#292927]/70 leading-relaxed">{feature.description}</p>
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
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <MotionDiv variants={fadeInLeft} className="space-y-12">
              {/* Header Section */}
              <div className="space-y-8">
                <MotionH2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-[#292927] leading-tight mb-6">
                  Chi Siamo
                </MotionH2>
                <div className="space-y-6">
                  <MotionP variants={fadeInUp} className="text-lg lg:text-xl text-[#292927]/70 leading-relaxed">
                    <strong className="text-[#e0710d] font-semibold">Cappomano</strong> nasce nel cuore di Milano con una missione chiara: rivoluzionare il settore
                    dei servizi domestici attraverso l&apos;innovazione tecnologica e i pagamenti digitali.
                  </MotionP>
                  <MotionP variants={fadeInUp} className="text-lg lg:text-xl text-[#292927]/70 leading-relaxed">
                    Siamo la prima piattaforma italiana che unisce la tradizione dei servizi per la casa con le più moderne
                    tecnologie di pagamento, incluse le criptovalute e sistemi di credito flessibili.
                  </MotionP>
                </div>
              </div>

              {/* Key Features Section */}
              <MotionDiv variants={fadeInUp} className="space-y-5">
                <h3 className="text-2xl font-bold text-[#292927] mb-6">I Nostri Punti di Forza</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-5 p-5 bg-[#e2dacd]/20 rounded-2xl border border-[#e2dacd]/30 hover:bg-[#e2dacd]/30 transition-colors">
                    <div className="w-4 h-4 bg-[#e0710d] rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#292927] font-semibold mb-2">Innovazione Tecnologica</p>
                      <p className="text-[#292927]/70 leading-relaxed">Primi in Italia ad accettare Bitcoin ed Ethereum per servizi domestici</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5 p-5 bg-[#e2dacd]/20 rounded-2xl border border-[#e2dacd]/30 hover:bg-[#e2dacd]/30 transition-colors">
                    <div className="w-4 h-4 bg-[#9a1118] rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#292927] font-semibold mb-2">Qualità Certificata</p>
                      <p className="text-[#292927]/70 leading-relaxed">Professionisti verificati e formati secondo i nostri standard rigorosi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-5 p-5 bg-[#e2dacd]/20 rounded-2xl border border-[#e2dacd]/30 hover:bg-[#e2dacd]/30 transition-colors">
                    <div className="w-4 h-4 bg-[#bb6a48] rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-[#292927] font-semibold mb-2">Flessibilità di Pagamento</p>
                      <p className="text-[#292927]/70 leading-relaxed">Sistema di credito integrato per pagamenti dilazionati e personalizzati</p>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </MotionDiv>

            {/* Right Column - Visual Card */}
            <MotionDiv variants={fadeInRight} className="relative lg:pl-8">
              <div className="bg-[#e2dacd]/40 rounded-3xl p-10 lg:p-12 shadow-lg border border-[#e2dacd]/50">
                {/* Header */}
                <div className="text-center mb-10">
                  <Hand className="w-24 h-24 text-[#e0710d] mx-auto mb-8" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#292927] mb-4">Cappomano Milano</h3>
                  <p className="text-[#292927]/70 text-lg font-medium">Il futuro dei servizi domestici</p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e2dacd]/30">
                    <div className="flex items-center space-x-5">
                      <div className="w-5 h-5 bg-[#9a1118] rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-[#292927] mb-1 text-lg">Sede Principale</p>
                        <p className="text-[#292927]/70">Milano, Lombardia</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e2dacd]/30">
                    <div className="flex items-center space-x-5">
                      <div className="w-5 h-5 bg-[#bb6a48] rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-[#292927] mb-1 text-lg">Servizi Attivi</p>
                        <p className="text-[#292927]/70">Milano e Provincia</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-[#e2dacd]/30">
                    <div className="flex items-center space-x-5">
                      <div className="w-5 h-5 bg-[#e0710d] rounded-full flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-[#292927] mb-1 text-lg">Espansione</p>
                        <p className="text-[#292927]/70">Presto in tutta Italia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#e0710d] rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#bb6a48] rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 bg-[#9a1118] rounded-full opacity-15"></div>
            </MotionDiv>
          </div>
        </div>
      </MotionSection>

      {/* Stats Section */}
      <MotionSection
        className="py-32 px-4 bg-[#e0710d]"
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
      >
        <div className="container mx-auto max-w-7xl">
          <ContactForm initialService={selectedService} />
        </div>
      </MotionSection>


      {/* CTA Section */}
      <MotionSection
        className="py-32 px-4 bg-[#e0710d] relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#e0710d]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e0710d] via-[#e0710d] to-[#bb6a48] opacity-90"></div>
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
              <MotionH2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Pronto a Iniziare con Cappomano?
              </MotionH2>
              <MotionP variants={fadeInUp} className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Unisciti alla rivoluzione dei pagamenti crypto per i servizi domestici
              </MotionP>
              <MotionDiv variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button
                  size="lg"
                  className="bg-white text-[#e0710d] hover:bg-[#e2dacd] hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl"
                >
                  Registrati Gratis
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#e0710d] hover:scale-105 transition-all duration-300 bg-transparent px-8 py-6 text-lg font-semibold rounded-2xl"
                >
                  Scopri di Più
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
                <span className="inline-block w-16 h-2 rounded-full bg-[#e0710d]"></span>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#292927] leading-tight">
                  Dove Operiamo: <span className="text-[#e0710d]">Milano</span>
                </h2>
                <p className="text-xl lg:text-2xl text-[#292927]/70 leading-relaxed">
                  <span className="font-semibold text-[#e0710d]">Siamo attivi principalmente a Milano e provincia.</span>
                </p>
              </div>
              <div className="bg-[#e0710d]/10 border border-[#e0710d]/20 rounded-3xl p-8 space-y-4">
                <p className="text-lg text-[#292927] leading-relaxed">
                  Scopri la nostra area di copertura sulla mappa e 
                  <span className="text-[#9a1118] font-semibold"> contattaci</span> per servizi personalizzati nella tua zona!
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="w-3 h-3 bg-[#e0710d] rounded-full"></div>
                    <span className="text-sm font-medium text-[#292927]">Centro Milano</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="w-3 h-3 bg-[#9a1118] rounded-full"></div>
                    <span className="text-sm font-medium text-[#292927]">Provincia</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white rounded-2xl px-4 py-2 shadow-sm">
                    <div className="w-3 h-3 bg-[#bb6a48] rounded-full"></div>
                    <span className="text-sm font-medium text-[#292927]">Zone Limitrofe</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Map */}
            <div className="relative">
              <div className="bg-[#e2dacd]/20 rounded-3xl p-6 border border-[#e2dacd]/30">
                <div className="h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-[#e2dacd]/50">
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
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#e0710d] rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#bb6a48] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>      </MotionSection>

      {/* Footer */}
      <Footer />
     
    </div>
  )
}
