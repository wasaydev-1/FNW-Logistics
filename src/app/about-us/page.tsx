import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero with background image */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/shipping-port-bg.png"
            alt="FNW Logistics Shipping Port"
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(39,39,39,0.6), rgba(39,39,39,0.55))' }} />
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">About FNW Logistics</h1>
            <p className="text-white/90 max-w-2xl text-base sm:text-lg">
              Moving businesses forward with dependable logistics, transparent processes, and a customer-first mindset.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision with VIP animations */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Text column */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-dark mb-6">Our Vision & Mission</h2>
              <div className="space-y-6 lg:space-y-8">
                <div className="bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-primary mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                    Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Redefine logistics with innovative, customer‑centric, and sustainable supply
                    chain solutions that empower businesses to move with confidence.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-brand-accent/5 to-brand-primary/5 p-4 sm:p-6 rounded-xl">
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-primary mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                    Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Be your resilient logistics partner by simplifying end-to-end operations across air, sea, custom, and road, delivering exceptional quality, transparent tracking, and consistent on-time performance at every step.
                  </p>
                </div>
              </div>
            </div>

            {/* Image collage - optimized for mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
              {/* Card 1 - Show on mobile only */}
              <div className="relative overflow-hidden rounded-xl shadow-md animate-fade-in-up sm:hidden" style={{ animationDelay: '.05s' }}>
                <div className="aspect-[3/2] relative">
                  <Image
                    src="/freight1.jpg"
                    alt="FNW Logistics Freight Services"
                    fill
                    priority={false}
                    quality={80}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 ring-1 ring-black/5 rounded-xl pointer-events-none" />
              </div>
              {/* Card 1 - Show on larger screens */}
              <div className="hidden sm:block relative overflow-hidden rounded-xl shadow-md animate-fade-in-up" style={{ animationDelay: '.05s' }}>
                <div className="aspect-[3/2] relative">
                  <Image
                    src="/freight1.jpg"
                    alt="FNW Logistics Freight Services"
                    fill
                    priority={false}
                    quality={80}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 ring-1 ring-black/5 rounded-xl pointer-events-none" />
              </div>
              {/* Card 2 - Show on larger screens */}
              <div className="hidden sm:block relative overflow-hidden rounded-xl shadow-md animate-fade-in-up" style={{ animationDelay: '.12s' }}>
                <div className="aspect-[3/2] relative">
                  <Image
                    src="/freight2.jpg"
                    alt="FNW Logistics Transportation"
                    fill
                    priority={false}
                    quality={80}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 ring-1 ring-black/5 rounded-xl pointer-events-none" />
              </div>
              {/* Card 3 - Show on larger screens, spans 2 columns */}
              <div className="hidden sm:block sm:col-span-2 relative overflow-hidden rounded-xl shadow-md animate-fade-in-up" style={{ animationDelay: '.2s' }}>
                <div className="aspect-[21/9] relative">
                  <Image
                    src="/road1.jpg"
                    alt="FNW Logistics Global Operations"
                    fill
                    priority={false}
                    quality={80}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1200px) 100vw, 66vw"
                  />
                </div>
                <div className="absolute inset-0 ring-1 ring-black/5 rounded-xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-brand-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <p className="text-brand-primary font-semibold tracking-wide">Our Principles</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mt-1">Values That Move Us</h2>
            <p className="text-gray-700 mt-3">A simple set of beliefs guides how we plan, execute, and care for every shipment.</p>
          </div>

          <div className="mt-10 flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-px-4 sm:scroll-px-0">
            {/* Card */}
            <div className="animate-fade-in-up rounded-xl border bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition flex-shrink-0 w-[85%] sm:w-auto snap-center" style={{ animationDelay: '.02s' }}>
              <div className="w-10 h-10 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center mb-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.09 6.26L20 9l-5 3.64L16.18 20 12 16.9 7.82 20 9 12.64 4 9l5.91-.74L12 2z"/></svg>
              </div>
              <h3 className="font-semibold text-brand-dark mb-1">Excellence</h3>
              <p className="text-gray-600">We sweat the details so your freight doesn’t. Consistency over shortcuts.</p>
            </div>

            <div className="animate-fade-in-up rounded-xl border bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition flex-shrink-0 w-[85%] sm:w-auto snap-center" style={{ animationDelay: '.06s' }}>
              <div className="w-10 h-10 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center mb-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm-1 14l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 8z"/></svg>
              </div>
              <h3 className="font-semibold text-brand-dark mb-1">Integrity</h3>
              <p className="text-gray-600">Transparent rates, honest timelines, clear updates—every single time.</p>
            </div>

            <div className="animate-fade-in-up rounded-xl border bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition flex-shrink-0 w-[85%] sm:w-auto snap-center" style={{ animationDelay: '.1s' }}>
              <div className="w-10 h-10 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center mb-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l4 4 4-4H6c0-3.87 3.13-7 7-7v-2zM11 21c4.97 0 9-4.03 9-9h3l-4-4-4 4h3c0 3.87-3.13 7-7 7v2z"/></svg>
              </div>
              <h3 className="font-semibold text-brand-dark mb-1">Growth</h3>
              <p className="text-gray-600">We learn fast and improve faster—process, tech, and people.</p>
            </div>

            <div className="animate-fade-in-up rounded-xl border bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition flex-shrink-0 w-[85%] sm:w-auto snap-center" style={{ animationDelay: '.14s' }}>
              <div className="w-10 h-10 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center mb-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2V17h2v-0.5zM13 7h-2v7h2V7z"/></svg>
              </div>
              <h3 className="font-semibold text-brand-dark mb-1">Reliability</h3>
              <p className="text-gray-600">Timely moves and predictable outcomes you can plan your business on.</p>
            </div>

            <div className="animate-fade-in-up rounded-xl border bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition flex-shrink-0 w-[85%] sm:w-auto snap-center" style={{ animationDelay: '.18s' }}>
              <div className="w-10 h-10 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center mb-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4 8.04 4 9.54 4.81 10.35 6.09 11.16 4.81 12.66 4 14.2 4 16.7 4 18.7 6 18.7 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <h3 className="font-semibold text-brand-dark mb-1">Care</h3>
              <p className="text-gray-600">Every shipment is handled like it’s our own—safely and carefully.</p>
            </div>

            <div className="animate-fade-in-up rounded-xl border bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition flex-shrink-0 w-[85%] sm:w-auto snap-center" style={{ animationDelay: '.22s' }}>
              <div className="w-10 h-10 rounded-full bg-brand-primary/15 text-brand-primary flex items-center justify-center mb-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <h3 className="font-semibold text-brand-dark mb-1">Teamwork</h3>
              <p className="text-gray-600">We collaborate across teams and partners to achieve shared results.</p>
            </div>
          </div>
        </div>
      </section>


  

      {/* Distinct showcase section - glass cards on parallax banner */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/freight5.jpg')" }}
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <p className="uppercase tracking-wider text-white/80 text-xs sm:text-sm">Why choose fnw</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Built For Speed, Clarity, and Care</h2>
            <p className="mt-3 text-white/85 max-w-2xl mx-auto">
              A modern logistics partner that blends human attention with smart systems for dependable outcomes.
            </p>
          </div>

          {/* Glass feature cards */}
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="animate-fade-in-up" style={{ animationDelay: '.04s' }}>
              <div className="backdrop-blur-md bg-white/15 border border-white/20 rounded-2xl p-6 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-white/20 transition">
                <div className="text-brand-accent mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l18-9-9 18-2-7-7-2z"/></svg>
                </div>
                <h3 className="font-semibold text-lg">Proactive Tracking</h3>
                <p className="text-white/85 mt-1">Live updates and alerts keep your team a step ahead.</p>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '.08s' }}>
              <div className="backdrop-blur-md bg-white/15 border border-white/20 rounded-2xl p-6 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-white/20 transition">
                <div className="text-brand-accent mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11H7v-2h6V7l5 5-5 5v-3z"/></svg>
                </div>
                <h3 className="font-semibold text-lg">Fast Turnarounds</h3>
                <p className="text-white/85 mt-1">Tight SLAs and agile ops to meet your business timelines.</p>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '.12s' }}>
              <div className="backdrop-blur-md bg-white/15 border border-white/20 rounded-2xl p-6 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-white/20 transition">
                <div className="text-brand-accent mb-2">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4 8.04 4 9.54 4.81 10.35 6.09 11.16 4.81 12.66 4 14.2 4 16.7 4 18.7 6 18.7 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <h3 className="font-semibold text-lg">Dedicated Care</h3>
                <p className="text-white/85 mt-1">A single point of contact who owns each shipment end‑to‑end.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center animate-fade-in-up" style={{ animationDelay: '.16s' }}>
            <a href="/services" className="inline-block bg-brand-primary hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition">
              Our Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


