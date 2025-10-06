import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/freight4.jpg')",
          zIndex: 0
        }}
      >
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(39,39,39,0.7)' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative w-full py-8 sm:py-10" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Delivering The Future Of</span>
              <br />
              <span className="text-brand-accent">Logistics</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Fast, reliable, and tech-driven shipping solutions across the globe. 
              Connecting businesses worldwide with seamless logistics excellence.
            </p>
            
            {/* Get In Touch Button */}
            <div className="mb-8">
              <a 
                href="#contact-form" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;