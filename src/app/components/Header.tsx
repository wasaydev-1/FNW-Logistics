"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
            <span className="text-xs sm:text-sm hidden sm:inline">
            Reliable Freight Forwarding & Logistics Solutions — Moving Your Cargo Safely, On Time, Every Time.
            </span>
        
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <Image
              src="/logo-fnw.jpg"
              alt="Company Logo"
              width={90}
              height={45}
              className="object-contain"
            />
            
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1.5">
              <Link href="/" className="relative px-3.5 py-1 rounded-md font-medium text-[15px] lg:text-base text-gray-800 hover:text-brand-dark hover:bg-brand-accent/10 transition-colors duration-200 group">
                Home
                <span className="pointer-events-none absolute left-3 right-3 -bottom-1 h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href="/about-us" className="relative px-3.5 py-1 rounded-md font-medium text-[15px] lg:text-base text-gray-800 hover:text-brand-dark hover:bg-brand-accent/10 transition-colors duration-200 group">
                About Us
                <span className="pointer-events-none absolute left-3 right-3 -bottom-1 h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href="/services" className="relative px-3.5 py-1 rounded-md font-medium text-[15px] lg:text-base text-gray-800 hover:text-brand-dark hover:bg-brand-accent/10 transition-colors duration-200 group">
                Services
                <span className="pointer-events-none absolute left-3 right-3 -bottom-1 h-0.5 bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden text-gray-700 hover:text-brand-primary p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col space-y-1 pt-2">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-brand-primary font-medium text-base py-3 px-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about-us" 
                className="text-gray-700 hover:text-brand-primary font-medium text-base py-3 px-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-brand-primary font-medium text-base py-3 px-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;
