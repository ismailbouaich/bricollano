"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { User, Building2, Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react"
import { MotionDiv, fadeInUp, scaleIn } from "@/components/motion-wrapper"
import { useEffect } from "react"
import emailjs from '@emailjs/browser'

export default function ContactForm({ initialService = "" }) {
  const [formData, setFormData] = useState({
    customerType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: initialService,
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Update service if initialService changes
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }))
    }
  }, [initialService])

  const services = [
    "Bricolage",
    "Jardinage",
    "Ménage",
    "Déménagement",
    "Aide à domicile",
    "Garde d'animaux",
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // Track the submission type (email or whatsapp)
  const [submissionType, setSubmissionType] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      if (formData.customerType === "business") {
        // For business/enterprise customers, send via email using EmailJS
        // Replace these with your actual EmailJS values
        const serviceId = "service_vgx4p3z";
        const templateId = "template_hww16fi";
        const publicKey = "rFUtxZaXCAQqdlrat";
        
        const serviceText = formData.service ? 
          services.find(s => s.toLowerCase().replace(/\s+/g, "-") === formData.service) || formData.service : 
          "Nessun servizio selezionato";
        
        // Prepare template parameters
        const templateParams = {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          from_phone: formData.phone,
          company: formData.company,
          service: serviceText,
          message: formData.message,
        };
        
        try {
          // Send email using EmailJS
          await emailjs.send(serviceId, templateId, templateParams, publicKey);
          
          // Log success
          console.log("Email sent successfully with EmailJS:", templateParams);
          
          // Set submission type to email
          setSubmissionType("email");
        } catch (error) {
          console.error("EmailJS Error:", error);
          throw new Error("Failed to send email. Please try again later.");
        }
      } else if (formData.customerType === "individual") {
        // For individual customers, redirect to WhatsApp
        const phoneNumber = "393123456789" // Replace with your actual WhatsApp number
        
        // Format the WhatsApp message
        const serviceText = formData.service ? 
          services.find(s => s.toLowerCase().replace(/\s+/g, "-") === formData.service) || formData.service : 
          "Nessun servizio selezionato"
          
        const message = `
Nome: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Telefono: ${formData.phone}
Servizio: ${serviceText}
Messaggio: ${formData.message}
        `.trim()
        
        // Encode the message for a URL
        const encodedMessage = encodeURIComponent(message)
        
        // Create the WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank")
        
        // Set submission type to whatsapp
        setSubmissionType("whatsapp")
      }
      
      // Set form as submitted
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setSubmissionType(null)
        setFormData({
          customerType: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        })
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      alert("Si è verificato un errore durante l'invio del modulo. Per favore riprova.")
    }
  }

  if (isSubmitted) {
    return (
      <MotionDiv initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
        <MotionDiv
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        </MotionDiv>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {submissionType === "email" 
            ? "Email Inviata!" 
            : "Richiesta Inviata!"}
        </h3>
        <p className="text-gray-600">
          {submissionType === "email"
            ? "Abbiamo ricevuto la tua richiesta e ti risponderemo via email il prima possibile."
            : "Sei stato reindirizzato a WhatsApp per completare l'invio del messaggio."}
        </p>
      </MotionDiv>
    )
  }

  return (
    <MotionDiv
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <Card className="max-w-2xl mx-auto shadow-xl border-0">
        <MotionDiv variants={fadeInUp}>
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Contattaci</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Compila il form per ricevere un preventivo personalizzato
            </CardDescription>
          </CardHeader>
        </MotionDiv>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Type Selection */}
            <MotionDiv variants={fadeInUp} className="space-y-2">
              <Label htmlFor="customerType" className="text-sm font-medium text-gray-700">
                Tipo di Cliente *
              </Label>
              <Select value={formData.customerType} onValueChange={(value) => handleInputChange("customerType", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleziona il tipo di cliente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-blue-500" />
                      <span>Privato/Individuale</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="business">
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-orange-500" />
                      <span>Azienda/Business</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              {formData.customerType && (
                <MotionDiv initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                  <Badge variant="outline" className="text-xs">
                    {formData.customerType === "individual" ? (
                      <>
                        <User className="w-3 h-3 mr-1" />
                        Cliente Privato
                      </>
                    ) : (
                      <>
                        <Building2 className="w-3 h-3 mr-1" />
                        Cliente Business
                      </>
                    )}
                  </Badge>
                </MotionDiv>
              )}
            </MotionDiv>

            {/* Personal Information */}
            <MotionDiv variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  Nome *
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Il tuo nome"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Cognome *
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Il tuo cognome"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
            </MotionDiv>

            {/* Company Field (only for business) */}
            {formData.customerType === "business" && (
              <MotionDiv
                variants={fadeInUp}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Nome Azienda *
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Nome della tua azienda"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  required={formData.customerType === "business"}
                  className="transition-all duration-200 focus:scale-[1.02]"
                />
              </MotionDiv>
            )}

            {/* Contact Information */}
            <MotionDiv variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tua@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="pl-10 transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Telefono
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+39 123 456 7890"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10 transition-all duration-200 focus:scale-[1.02]"
                  />
                </div>
              </div>
            </MotionDiv>

            {/* Service Selection */}
            <MotionDiv variants={fadeInUp} className="space-y-2">
              <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                Servizio Richiesto
              </Label>
              <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleziona il servizio di interesse" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </MotionDiv>

            {/* Message */}
            <MotionDiv variants={fadeInUp} className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Messaggio
              </Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                <Textarea
                  id="message"
                  placeholder="Descrivi le tue esigenze o fai una domanda..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="pl-10 resize-none transition-all duration-200 focus:scale-[1.02]"
                />
              </div>
            </MotionDiv>

            {/* Payment Methods Info */}
            <MotionDiv variants={fadeInUp} className="bg-gradient-to-r from-orange-50 to-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Metodi di Pagamento Accettati:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">💰 Bitcoin</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">💎 Ethereum</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">💳 Sistema Credito</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">🏦 Tradizionali</Badge>
              </div>
            </MotionDiv>

            {/* Submit Button */}
            <MotionDiv variants={scaleIn}>
              <Button
                type="submit"
                disabled={
                  isSubmitting || !formData.customerType || !formData.firstName || !formData.lastName || !formData.email
                }
                className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02]"
                size="lg"
              >
                {isSubmitting ? (
                  <MotionDiv
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? "Invio in corso..." : "Invia Richiesta"}
              </Button>
            </MotionDiv>

            <MotionDiv variants={fadeInUp} className="text-center text-sm text-gray-500">
              <p>
                Compilando questo form accetti la nostra{" "}
                <a href="#" className="text-orange-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                e i{" "}
                <a href="#" className="text-orange-600 hover:underline">
                  Termini di Servizio
                </a>
              </p>
            </MotionDiv>
          </form>
        </CardContent>
      </Card>
    </MotionDiv>
  )
}
