"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star, Clock } from 'lucide-react'
import { 
  FaTools, 
  FaSeedling, 
  FaBroom, 
  FaTruck, 
  FaHandHoldingHeart, 
  FaDog 
} from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { MotionDiv, fadeInUp } from "@/components/motion-wrapper"

const services = [
  {
    id: 'elettricista',
    title: 'Elettricista Milano',
    description: 'Impianti elettrici, riparazioni e installazioni',
    price: '€35/ora',
    rating: 4.8,
    reviews: 156,
    icon: FaTools,
    iconColor: '#e0710d',
    duration: '1-3 ore',
    features: ['Impianti elettrici', 'Riparazioni urgenti', 'Installazioni', 'Certificazioni'],
    popular: true,
  },
  {
    id: 'idraulico',
    title: 'Idraulico Milano',
    description: 'Riparazioni idrauliche e manutenzione impianti',
    price: '€40/ora',
    rating: 4.7,
    reviews: 124,
    icon: FaTools,
    iconColor: '#bb6a48',
    duration: '1-4 ore',
    features: ['Perdite d\'acqua', 'Installazioni', 'Manutenzione', 'Pronto intervento'],
    popular: true,
  },
  {
    id: 'pulizie',
    title: 'Pulizie Casa',
    description: 'Pulizia completa di casa e ufficio a Milano',
    price: '€28/ora',
    rating: 4.9,
    reviews: 342,
    icon: FaBroom,
    iconColor: '#9a1118',
    duration: '2-6 ore',
    features: ['Pulizia completa', 'Prodotti inclusi', 'Personale qualificato', 'Sanificazione'],
    popular: true,
  },
  {
    id: 'traslochi',
    title: 'Traslochi Milano',
    description: 'Servizi di trasloco e trasporto mobili',
    price: '€45/ora',
    rating: 4.6,
    reviews: 98,
    icon: FaTruck,
    iconColor: '#e0710d',
    duration: '3-8 ore',
    features: ['Imballaggio', 'Trasporto', 'Montaggio', 'Smontaggio'],
    popular: false,
  },
  {
    id: 'giardinaggio',
    title: 'Giardinaggio Milano',
    description: 'Cura del verde e manutenzione giardini',
    price: '€32/ora',
    rating: 4.7,
    reviews: 183,
    icon: FaSeedling,
    iconColor: '#22c55e',
    duration: '2-4 ore',
    features: ['Potatura', 'Irrigazione', 'Semina', 'Manutenzione verde'],
    popular: false,
  },
  {
    id: 'muratore',
    title: 'Muratore Milano',
    description: 'Lavori di muratura e ristrutturazioni',
    price: '€38/ora',
    rating: 4.8,
    reviews: 217,
    icon: FaTools,
    iconColor: '#6b7280',
    duration: '2-8 ore',
    features: ['Ristrutturazioni', 'Riparazioni murarie', 'Piastrellature', 'Intonaci'],
    popular: false,
  }
]

export default function EmblaServicesSlider({ onBook = () => {} }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
    containScroll: false,
    duration: 20
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])
  const autoScrollRef = useRef(null)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    applyScaleEffect(emblaApi)
  }, [])

  const applyScaleEffect = useCallback((emblaApi) => {
    const slides = emblaApi.slideNodes()
    const selectedIndex = emblaApi.selectedScrollSnap()
    
    slides.forEach((slide, index) => {
      const distance = Math.abs(index - selectedIndex)
      let scale, opacity
      
      if (distance === 0) {
        scale = 1
        opacity = 1
      } else if (distance === 1) {
        scale = 0.8
        opacity = 0.6
      } else {
        scale = 0.7
        opacity = 0.4
      }
      
      const slideContent = slide.querySelector('.embla__slide__content')
      if (slideContent) {
        slideContent.style.transform = `scale(${scale})`
        slideContent.style.opacity = opacity
        slideContent.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out'
      }
    })
  }, [])

  const startAutoScroll = useCallback(() => {
    if (emblaApi) {
      autoScrollRef.current = setInterval(() => {
        emblaApi.scrollNext()
      }, 4000)
    }
  }, [emblaApi])

  const stopAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
    emblaApi.on('scroll', () => applyScaleEffect(emblaApi))
    
    // Start auto-scroll
    startAutoScroll()
    
    // Pause auto-scroll on hover
    const emblaNode = emblaApi.rootNode()
    emblaNode.addEventListener('mouseenter', stopAutoScroll)
    emblaNode.addEventListener('mouseleave', startAutoScroll)

    return () => {
      emblaApi.off('reInit', onInit)
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
      emblaNode.removeEventListener('mouseenter', stopAutoScroll)
      emblaNode.removeEventListener('mouseleave', startAutoScroll)
      stopAutoScroll()
    }
  }, [emblaApi, onInit, onSelect, applyScaleEffect, startAutoScroll, stopAutoScroll])

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="relative max-w-7xl mx-auto"
    >
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="embla__slide">
                  <div className="embla__slide__content">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 mx-4 h-full">
                      <div className="relative h-48 bg-gradient-to-br from-[#e2dacd]/30 to-[#e2dacd]/10 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5"></div>

                        {/* Large Icon */}
                        <div className="relative z-10 p-8">
                          <IconComponent 
                            size={80} 
                            color={service.iconColor}
                            className="drop-shadow-lg"
                          />
                        </div>

                        <div className="absolute top-4 left-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-[#292927]">
                            {service.title}
                          </div>
                        </div>

                        <div className="absolute bottom-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-[#e0710d]">
                            {service.price}
                          </div>
                        </div>

                        {service.popular && (
                          <div className="absolute top-4 right-4 bg-[#e0710d] text-white px-2 py-1 rounded-full text-xs font-semibold">
                            🔥 Popolare
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-[#e0710d] fill-current" />
                            <span className="text-sm font-medium text-[#292927]">{service.rating}</span>
                            <span className="text-xs text-[#292927]/70">({service.reviews} recensioni)</span>
                          </div>
                          <div className="flex items-center space-x-1 text-[#292927]/70">
                            <Clock className="w-4 h-4" />
                            <span className="text-xs">{service.duration}</span>
                          </div>
                        </div>

                        <p className="text-[#292927]/70 mb-4 text-sm">{service.description}</p>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-[#bb6a48] rounded-full"></div>
                              <span className="text-xs text-[#292927]/70">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button 
                          onClick={() => onBook(service.title)}
                          className="w-full bg-[#e0710d] hover:bg-[#bb6a48] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105"
                        >
                          Prenota Ora
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          {/* Dots */}
          <div className="flex space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === selectedIndex 
                    ? 'bg-[#e0710d] scale-110' 
                    : 'bg-[#292927]/30 hover:bg-[#292927]/50'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </MotionDiv>
  )
}

