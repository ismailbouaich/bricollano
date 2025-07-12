"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { MotionDiv, fadeInUp, scaleIn } from "@/components/motion-wrapper"


export default function ServicesSlider({ onBook = () => {} }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const services = [
    {
      id: 1,
      title: "Pulizia",
      description: "Servizi di pulizia professionale per casa e ufficio",
      price: "Da €25/ora",
      rating: 4.9,
      image: "/assets/image/pulizia.jpg",
      popular: true,
    },
    {
      id: 2,
      title: "Giardinieri",
      description: "Manutenzione giardini e spazi verdi",
      price: "Da €30/ora",
      rating: 4.8,
      image: "/assets/image/giardinieri.jpg",
      popular: false,
    },
    {
      id: 3,
      title: "Pulire Cantina",
      description: "Pulizia e organizzazione cantine e seminterrati",
      price: "Da €35/ora",
      rating: 4.7,
      image: "/assets/image/cantina.jpg",
      popular: false,
    },
    {
      id: 4,
      title: "Vetro",
      description: "Pulizia vetri e superfici trasparenti",
      price: "Da €20/ora",
      rating: 4.9,
      image: "/assets/image/vetro.jpg",
      popular: false,
    },
    {
      id: 5,
      title: "Girare i Sacchetti",
      description: "Gestione e raccolta rifiuti",
      price: "Da €15/ora",
      rating: 4.6,
      image: "/assets/image/sacchetti.jpg",
      popular: false,
    },
  ]

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(timer)
  }, [services.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? services.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === services.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="relative max-w-6xl mx-auto"
    >
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {services.map((service) => (
            <div key={service.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-0 shadow-xl overflow-hidden bg-gradient-to-br from-white to-gray-50">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

                    {service.popular && (
                      <Badge className="absolute top-4 left-4 bg-orange-500 text-white">🔥 Popolare</Badge>
                    )}

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{service.rating}</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-3xl font-bold text-gray-900 mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-600">{service.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="mb-6">
                        <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700"
                          onClick={() => onBook(service.title.toLowerCase().replace(/\s+/g, '-'))}
                        >
                          Prenota Ora
                        </Button>
                        <Button size="lg" variant="outline" className="border-2 bg-transparent">
                          Dettagli
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white z-10"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white z-10"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-gradient-to-r from-orange-500 to-blue-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Service Grid Preview (Mobile) */}
      <div className="md:hidden mt-12 grid grid-cols-2 gap-4">
        {services.map((service, index) => (
          <MotionDiv
            key={service.id}
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => goToSlide(index)}
          >
            <Card
              className={`border-2 transition-all ${
                currentIndex === index ? "border-orange-500 shadow-lg" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="relative h-24">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-3">
                <h4 className="font-semibold text-sm">{service.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{service.price}</p>
              </CardContent>
            </Card>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  )
}
