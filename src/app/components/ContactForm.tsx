"use client";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us how we can help";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Ready to streamline your logistics? Let's discuss how we can help your business move forward.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 sm:p-12 relative" id="contact-form">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-accent rounded-t-3xl"></div>
          <div className="absolute top-6 right-6 w-20 h-20 bg-brand-primary/5 rounded-full"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-brand-accent/5 rounded-full"></div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  } shadow-sm`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="sm:col-span-1">
                <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } shadow-sm`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Company Field */}
              <div className="sm:col-span-1">
                <label htmlFor="company" className="block text-sm font-semibold text-brand-dark mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 ${
                    errors.company ? "border-red-500" : "border-gray-200"
                  } shadow-sm`}
                  placeholder="Your company name"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 ${
                    errors.phone ? "border-red-500" : "border-gray-200"
                  } shadow-sm`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-2">
                How Can We Help? *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all duration-200 resize-none bg-white text-gray-900 placeholder-gray-500 ${
                  errors.message ? "border-red-500" : "border-gray-200"
                } shadow-sm`}
                placeholder="Tell us about your logistics needs, shipping requirements, or any questions you have..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-10 py-5 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-800 font-semibold text-lg">
                  Thank you! Your message has been sent successfully.
                </p>
                <p className="text-green-700 mt-1">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="text-center p-6 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-red-800 font-semibold text-lg">
                  Sorry, there was an error sending your message.
                </p>
                <p className="text-red-700 mt-1">
                  Please try again or contact us directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
