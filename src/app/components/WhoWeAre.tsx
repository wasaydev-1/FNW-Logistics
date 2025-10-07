"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transform transition duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <p className="text-brand-primary font-semibold tracking-wide text-sm uppercase mb-4">About Us</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
            Empowering Your Business with<br />
            <span className="text-brand-primary">Tailored Logistics Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            At FNW Logistics, we believe in providing personalized and efficient End-to-end logistics solutions that meet your unique needs. With years of experience and a team of experts, we are dedicated to empowering your business with seamless logistics experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className={`relative transform transition duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/freight.jpg"
                  alt="FNW Logistics Freight Solutions"
                  fill
                  priority={false}
                  quality={80}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating badges (no numeric claims) */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-sm font-semibold text-brand-primary">Customer‑First</div>
                <div className="text-xs text-gray-600 uppercase tracking-wide">Service Mindset</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-brand-primary text-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.75a10.25 10.25 0 1 0 0 20.5 10.25 10.25 0 0 0 0-20.5zm0 18.5a8.25 8.25 0 1 1 0-16.5 8.25 8.25 0 0 1 0 16.5zM12.75 7a.75.75 0 0 0-1.5 0v5c0 .2.08.39.22.53l3 3a.75.75 0 1 0 1.06-1.06l-2.78-2.78V7z"/></svg>
                  <div className="text-base font-semibold">24/7</div>
                </div>
                <div className="text-xs uppercase tracking-wide">Support</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={`transform transition duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Expertise & Experience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Years of industry knowledge and specialized expertise in freight forwarding and logistics management.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Committed to Quality</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Unwavering commitment to delivering exceptional service quality and maintaining the highest standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Comprehensive Services</h3>
                  <p className="text-gray-600 leading-relaxed">
                    End-to-end logistics solutions covering air, sea, and road transportation with advanced tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Reliable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Efficient</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Trackable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Benefits (general, no stats) */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transform transition duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4 8.04 4 9.54 4.81 10.35 6.09 11.16 4.81 12.66 4 14.2 4 16.7 4 18.7 6 18.7 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <h3 className="font-semibold text-brand-dark mb-1">Customer‑First Service</h3>
            <p className="text-sm text-gray-600">Clear timelines, proactive updates, and a can‑do attitude.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-4 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg>
            </div>
            <h3 className="font-semibold text-brand-dark mb-1">Transparent Communication</h3>
            <p className="text-sm text-gray-600">You’ll always know what’s happening with your shipment.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 19v-2h7v2H4zm0-6v-2h16v2H4zm0-6V5h10v2H4z"/></svg>
            </div>
            <h3 className="font-semibold text-brand-dark mb-1">Tailored Solutions</h3>
            <p className="text-sm text-gray-600">Flexible options across air, ocean, and road to fit your goals.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l7 4v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4zm-1 13l-3-3 1.4-1.4L11 12.2l4.6-4.6L17 9l-6 6z"/></svg>
            </div>
            <h3 className="font-semibold text-brand-dark mb-1">Reliable & Careful</h3>
            <p className="text-sm text-gray-600">We handle every consignment with attention and care.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;


