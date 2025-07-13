
"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { User, Building2, Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react"
import { MotionDiv, fadeInUp, scaleIn } from "@/components/motion-wrapper"
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
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [submissionType, setSubmissionType] = useState(null)
  const successMessageRef = useRef(null)

  // Update service if initialService changes
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }))
    }
  }, [initialService])

  // Clear form fields
  const clearForm = () => {
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
  }

  // Scroll to success message when form is submitted
  useEffect(() => {
    if (showSuccessModal && successMessageRef.current) {
      setTimeout(() => {
        successMessageRef.current.scrollIntoView({ 
          behavior: "smooth", 
          block: "center" 
        });
      }, 100); // Small delay to ensure the success message is rendered
    }
  }, [showSuccessModal]);

  const services = [
    "Elettricista Milano",
    "Idraulico Milano", 
    "Pulizie Casa Milano",
    "Traslochi Milano",
    "Giardinaggio Milano",
    "Muratore Milano",
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    console.log("Form submitted with data:", formData);
    console.log("Customer type:", formData.customerType);
    
    try {
      if (formData.customerType === "business") {
        console.log("Processing business customer...");
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
          from_phone: formData.phone || "Non fornito",
          company: formData.company || "Non specificato",
          service: serviceText,
          message: formData.message || "Nessun messaggio aggiuntivo",
          customer_type: "Business/Azienda",
        };
        
        console.log("Sending email with params:", templateParams);
        
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
        console.log("Processing individual customer...");
        // For individual customers, redirect to WhatsApp
        const phoneNumber = "393123456789" // Replace with your actual WhatsApp number
        
        // Format the WhatsApp message
        const serviceText = formData.service ? 
          services.find(s => s.toLowerCase().replace(/\s+/g, "-") === formData.service) || formData.service : 
          "Nessun servizio selezionato"
          
        const message = `
*Nuova Richiesta da Cappomano*

👤 *Informazioni Cliente:*
• Nome: ${formData.firstName} ${formData.lastName}
• Email: ${formData.email}
• Telefono: ${formData.phone || "Non fornito"}

🔧 *Dettagli Servizio:*
• Tipo Cliente: Privato/Individuale
• Servizio Richiesto: ${serviceText}

💬 *Messaggio:*
${formData.message || "Nessun messaggio aggiuntivo"}

---
*Inviato tramite form Cappomano*
        `.trim()
        
        // Encode the message for a URL
        const encodedMessage = encodeURIComponent(message)
        
        // Create the WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        
        console.log("WhatsApp URL:", whatsappUrl);
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank")
        
        // Set submission type to whatsapp
        setSubmissionType("whatsapp")
      } else {
        console.log("No customer type selected or invalid customer type:", formData.customerType);
        throw new Error("Please select a customer type");
      }
      
      // Set form as submitted
      setIsSubmitting(false)
      setShowSuccessModal(true)
      clearForm() // Clear form immediately

      // Close modal after 5 seconds
      setTimeout(() => {
        setShowSuccessModal(false)
        setSubmissionType(null)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      alert("Si è verificato un errore durante l'invio del modulo. Per favore riprova.")
    }
  }

  return (
    <>
      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center">
            <MotionDiv
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
              className="text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            </MotionDiv>
            <DialogTitle className="text-2xl font-bold text-[#292927] mb-2">
              {submissionType === "email" 
                ? "Email Inviata!" 
                : submissionType === "whatsapp"
                ? "WhatsApp Aperto!"
                : "Richiesta Inviata!"}
            </DialogTitle>
            <p className="text-[#292927]/70 mb-4">
              {submissionType === "email"
                ? "Abbiamo ricevuto la tua richiesta e ti risponderemo via email il prima possibile."
                : submissionType === "whatsapp"
                ? "Sei stato reindirizzato a WhatsApp per completare l'invio del messaggio."
                : "La tua richiesta è stata elaborata."}
            </p>
            <Button 
              onClick={() => setShowSuccessModal(false)}
              className="bg-[#e0710d] text-white hover:bg-[#bb6a48] transition-all duration-200 hover:scale-105"
            >
              Chiudi
            </Button>
          </div>
        </DialogContent>
      </Dialog>

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
        <Card className="max-w-2xl mx-auto shadow-2xl border-0 bg-white rounded-3xl overflow-visible relative backdrop-blur-sm">
          {/* Decorative circles - only 3 maximum with proper z-index */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#e0710d] rounded-full opacity-40 z-[100]"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#bb6a48] rounded-full opacity-35 z-[100]"></div>
          <div className="absolute top-1/3 -right-3 w-6 h-6 bg-[#9a1118] rounded-full opacity-30 z-[100]"></div>
          
          {/* Subtle animated background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e2dacd]/5 via-transparent to-[#e0710d]/5 z-0"></div>
          
          <MotionDiv variants={fadeInUp}>
            <CardHeader className="text-center pb-8 pt-10 bg-gradient-to-br from-[#e2dacd]/20 to-[#e0710d]/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/3"></div>
              
              <div className="relative z-10 p-6">
                <div className="inline-block p-3 bg-[#e0710d]/10 rounded-full mb-4">
                  <div className="w-8 h-8 bg-[#e0710d] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                </div>
                <CardTitle className="text-4xl font-bold text-[#292927] mb-3 bg-gradient-to-r from-[#292927] to-[#e0710d] bg-clip-text text-transparent">
                  Contatta Cappomano
                </CardTitle>
                <CardDescription className="text-lg text-[#292927]/70 max-w-md mx-auto leading-relaxed">
                  ✨ Richiedi un preventivo gratuito per i tuoi servizi a Milano
                </CardDescription>
              </div>
            </CardHeader>
          </MotionDiv>

          <CardContent className="p-8 bg-gradient-to-b from-white to-[#e2dacd]/5 relative">
            {/* Subtle decorative elements in content area */}
            <div className="absolute top-4 right-4 w-6 h-6 bg-[#e0710d]/10 rounded-full"></div>
            <div className="absolute bottom-8 left-4 w-4 h-4 bg-[#bb6a48]/10 rounded-full"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              {/* Customer Type Selection */}
              <MotionDiv variants={fadeInUp} className="space-y-2">
                <Label htmlFor="customerType" className="text-sm font-medium text-[#292927]">
                  Tipo di Cliente *
                </Label>
                <Select value={formData.customerType} onValueChange={(value) => handleInputChange("customerType", value)}>
                  <SelectTrigger className="w-full border-[#e2dacd] focus:border-[#e0710d] focus:ring-[#e0710d]/20">
                    <SelectValue placeholder="Seleziona il tipo di cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="individual">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-[#e0710d]" />
                        <span>Privato/Individuale</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="business">
                      <div className="flex items-center space-x-2">
                        <Building2 className="w-4 h-4 text-[#bb6a48]" />
                        <span>Azienda/Business</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                {formData.customerType && (
                  <MotionDiv initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                    <Badge variant="outline" className="text-xs border-[#e0710d] text-[#e0710d]">
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
                  <Label htmlFor="firstName" className="text-sm font-medium text-[#292927]">
                    Nome *
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Il tuo nome"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                    className="transition-all duration-200 focus:scale-[1.02] border-[#e2dacd] focus:border-[#e0710d] focus:ring-[#e0710d]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-[#292927]">
                    Cognome *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Il tuo cognome"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                    className="transition-all duration-200 focus:scale-[1.02] border-[#e2dacd] focus:border-[#e0710d] focus:ring-[#e0710d]/20"
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
                  <Label htmlFor="company" className="text-sm font-medium text-[#292927]">
                    Nome Azienda *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Nome della tua azienda"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    required={formData.customerType === "business"}
                    className="transition-all duration-200 focus:scale-[1.02] border-[#e2dacd] focus:border-[#e0710d] focus:ring-[#e0710d]/20"
                  />
                </MotionDiv>
              )}

              {/* Contact Information */}
              <MotionDiv variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-[#292927]">
                    Email *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#e0710d] w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="tua@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="pl-10 transition-all duration-200 focus:scale-[1.02] border-[#e2dacd] focus:border-[#e0710d] focus:ring-[#e0710d]/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-[#292927]">
                    Telefono
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#e0710d] w-4 h-4" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+39 123 456 7890"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="pl-10 transition-all duration-200 focus:scale-[1.02] border-[#e2dacd] focus:border-[#e0710d] focus:ring-[#e0710d]/20"
                    />
                  </div>
                </div>
              </MotionDiv>

              {/* Service Selection */}
              <MotionDiv variants={fadeInUp} className="space-y-2">
                <Label htmlFor="service" className="text-sm font-medium text-[#292927]">
                  Servizio Richiesto
                </Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="w-full border-[#e2dacd] focus:border-[#e0710d] focus:ring-[#e0710d]/20">
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
                <Label htmlFor="message" className="text-sm font-medium text-[#292927]">
                  Messaggio
                </Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-[#e0710d] w-4 h-4" />
                  <Textarea
                    id="message"
                    placeholder="Descrivi le tue esigenze o fai una domanda..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="pl-10 resize-none transition-all duration-200 focus:scale-[1.02] border-[#e2dacd] focus:border-[#e0710d] focus:ring-[#e0710d]/20"
                  />
                </div>
              </MotionDiv>

              {/* Payment Methods Info */}
              <MotionDiv variants={fadeInUp} className="bg-gradient-to-r from-[#e2dacd]/30 to-[#e0710d]/10 p-4 rounded-lg border border-[#e2dacd]">
                <h4 className="font-semibold text-[#292927] mb-2 flex items-center">
                  <span className="mr-2">💳</span>
                  Metodi di Pagamento Accettati:
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#e0710d]/10 text-[#e0710d] hover:bg-[#e0710d]/20 border-[#e0710d]/20">💰 Contanti</Badge>
                  <Badge className="bg-[#bb6a48]/10 text-[#bb6a48] hover:bg-[#bb6a48]/20 border-[#bb6a48]/20">� Carta</Badge>
                  <Badge className="bg-[#292927]/10 text-[#292927] hover:bg-[#292927]/20 border-[#292927]/20">🏦 Bonifico</Badge>
                  <Badge className="bg-[#e0710d]/10 text-[#e0710d] hover:bg-[#e0710d]/20 border-[#e0710d]/20">📱 Digitale</Badge>
                </div>
              </MotionDiv>

              {/* Submit Button */}
              <MotionDiv variants={scaleIn}>
                <div className="relative">
                  {/* Decorative background for button */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e0710d] to-[#bb6a48] rounded-2xl opacity-20 blur-lg"></div>
                  
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting || !formData.customerType || !formData.firstName || !formData.lastName || !formData.email
                    }
                    className="w-full bg-gradient-to-r from-[#e0710d] to-[#bb6a48] hover:from-[#bb6a48] hover:to-[#e0710d] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed shadow-xl relative z-10 border-2 border-white/20"
                    size="lg"
                  >
                    <div className="flex items-center justify-center">
                      {isSubmitting ? (
                        <MotionDiv
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="w-6 h-6 border-3 border-white border-t-transparent rounded-full mr-3"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <Send className="w-5 h-5" />
                        </div>
                      )}
                      <span className="text-lg">
                        {isSubmitting ? "Invio in corso..." : "🚀 Prenota Ora"}
                      </span>
                    </div>
                  </Button>
                </div>
              </MotionDiv>

              <MotionDiv variants={fadeInUp} className="text-center text-sm text-[#292927]/70">
                <p>
                  Compilando questo form accetti la nostra{" "}
                  <a href="#" className="text-[#e0710d] hover:text-[#bb6a48] hover:underline">
                    Privacy Policy
                  </a>{" "}
                  e i{" "}
                  <a href="#" className="text-[#e0710d] hover:text-[#bb6a48] hover:underline">
                    Termini di Servizio
                  </a>
                </p>
              </MotionDiv>
            </form>
          </CardContent>
        </Card>
      </MotionDiv>
    </>
  )
}
