"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-brand-dark text-white py-1 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-2 md:mb-0">
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-xs sm:text-sm">+923100100282</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-xs sm:text-sm hidden xs:inline">customer.services@fnw-logistics.com</span>
              <span className="text-xs sm:text-sm xs:hidden">customer.services@fnw-logistics.com</span>
            </div>
          </div>
          
          {/* Announcement */}
          <div className="flex items-center gap-2 text-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm">
              <span className="hidden sm:inline">
                Reliable Freight Forwarding & Logistics Solutions — Moving Your Cargo Safely, On Time, Every Time.
              </span>
              <span className="sm:hidden">
                Reliable Freight Forwarding & Logistics Solutions
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl bg-white/95 backdrop-blur-sm' : 'shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image
                  src="/logo-fnw.png"
                  alt="FNW Logistics Company Logo"
                  width={100}
                  height={50}
                  className="object-contain hover:scale-105 transition-transform duration-200"
                  priority
                />
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link 
                href="/" 
                className="relative px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-200 group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link 
                href="/about-us" 
                className="relative px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-200 group"
              >
                <span className="relative z-10">About Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link 
                href="/services" 
                className="relative px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-200 group"
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent group-hover:w-full transition-all duration-300"></div>
              </Link>
              
              {/* CTA Button */}
              <Link 
                href="tel:+923100100282" 
                className="ml-4 px-6 py-1.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:scale-105"
              >
                Call Now
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden relative p-2 rounded-lg text-gray-700 hover:text-brand-primary hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <Link 
                href="/" 
                className="flex items-center px-4 py-3 text-gray-700 hover:text-brand-primary hover:bg-gradient-to-r hover:from-brand-primary/5 hover:to-brand-accent/5 font-medium rounded-lg transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-brand-primary transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              <Link 
                href="/about-us" 
                className="flex items-center px-4 py-3 text-gray-700 hover:text-brand-primary hover:bg-gradient-to-r hover:from-brand-primary/5 hover:to-brand-accent/5 font-medium rounded-lg transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-brand-primary transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Us
              </Link>
              <Link 
                href="/services" 
                className="flex items-center px-4 py-3 text-gray-700 hover:text-brand-primary hover:bg-gradient-to-r hover:from-brand-primary/5 hover:to-brand-accent/5 font-medium rounded-lg transition-all duration-200 group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5 mr-3 text-gray-400 group-hover:text-brand-primary transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Services
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-2">
                <Link 
                  href="tel:+923100100282" 
                  className="flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
