"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { Button, Textfield, TextAreaField } from "components/shared"
import { FaInstagram, FaTiktok, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa"

interface FormData {
  fullName: string
  companyName: string
  email: string
  phone: string
  destination: string
  commodity: string
  otherSpecification: string
  gradeExpectation: string
  quantity: string
  deliveryTimeline: string
  additionalNotes: string
}

export const Hero = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    destination: "",
    commodity: "",
    otherSpecification: "",
    gradeExpectation: "",
    quantity: "",
    deliveryTimeline: "",
    additionalNotes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        // Reset form
        console.log({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          destination: "",
          commodity: "",
          otherSpecification: "",
          gradeExpectation: "",
          quantity: "",
          deliveryTimeline: "",
          additionalNotes: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-service-bg md:h-[70lvh] 2xl:h-[40lvh] -tracking-[0.04em] md:mb-[500px]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:px-8 gap-10 md:gap-[130px]">
          <div className="md:w-1/2">
            <h2 className="text-dark text-[30px] md:text-[50px] font-medium md:leading-[100%] mt-4">
              Get in touch with Us
            </h2>
            <p className="text-gray text-xl mt-2.5 md:mt-5">
              Get in touch letting us know your needs, wants and explore opportunities.
            </p>
            <div className="mt-12">
              {/* <Link
                href="mailto:support@usetechrevolve.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-black "
              >
                mttlmited@email.com
              </Link> */}
              <div className="flex gap-4 mt-4">
                <Link
                  href="https://www.instagram.com/mercedestrading_ltd?igsh=MXNxdWhsOGN4anB6&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} />
                </Link>

                <Link
                  href="https://www.tiktok.com/@mercedes_trading?_t=ZS-8zYlGTcDAnq&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="TikTok"
                >
                  <FaTiktok size={24} />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/mercedes-trading-transport-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </Link>

                <Link
                  href="https://www.facebook.com/share/16rM9EtypP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook size={24} />
                </Link>

                <Link
                  href="https://wa.me/message/UBU472P27QGPA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-6">
                <Textfield
                  id="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={(e: any) => handleInputChange("fullName", e.target.value)}
                  required
                />
                <Textfield
                  id="companyName"
                  placeholder="Company name (optional)"
                  value={formData.companyName}
                  onChange={(e: any) => handleInputChange("companyName", e.target.value)}
                />
                <Textfield
                  id="email"
                  placeholder="Email address"
                  type="email"
                  value={formData.email}
                  onChange={(e: any) => handleInputChange("email", e.target.value)}
                  required
                />
                <Textfield
                  id="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e: any) => handleInputChange("phone", e.target.value)}
                  required
                />
                <Textfield
                  id="destination"
                  placeholder="Destination"
                  value={formData.destination}
                  onChange={(e: any) => handleInputChange("destination", e.target.value)}
                  required
                />
                <Textfield
                  id="commodity"
                  placeholder="Interested Commodity"
                  value={formData.commodity}
                  onChange={(e: any) => handleInputChange("commodity", e.target.value)}
                  required
                />
                <Textfield
                  id="otherSpecification"
                  placeholder="If others, please specify"
                  value={formData.otherSpecification}
                  onChange={(e: any) => handleInputChange("otherSpecification", e.target.value)}
                />
                <Textfield
                  id="gradeExpectation"
                  placeholder="Preferred grade expectation"
                  value={formData.gradeExpectation}
                  onChange={(e: any) => handleInputChange("gradeExpectation", e.target.value)}
                  required
                />
                <Textfield
                  id="quantity"
                  placeholder="Quantity required per (MT)"
                  value={formData.quantity}
                  onChange={(e: any) => handleInputChange("quantity", e.target.value)}
                  required
                />
                <Textfield
                  id="deliveryTimeline"
                  placeholder="Delivery Timeline"
                  value={formData.deliveryTimeline}
                  onChange={(e: any) => handleInputChange("deliveryTimeline", e.target.value)}
                  required
                />
                <Textfield
                  id="additionalNotes"
                  key="additionalNotes"
                  placeholder="Additional Note/Requirement"
                  value={formData.additionalNotes}
                  onChange={(e: any) => handleInputChange("additionalNotes", e.target.value)}
                />
              </div>

              {submitStatus === "success" && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <Button label={isSubmitting ? "Sending..." : "Submit"} fullWidth disabled={isSubmitting} type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
