"use client";
import Image from "next/image";
import { useState } from "react";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "air-freight",
      title: "Air Freight",
      headline: "Swift Air Cargo Solutions for Time-Sensitive Shipments",
      description: "FNW Logistics delivers rapid air freight services that connect your business to global markets with speed and reliability. Our air cargo solutions ensure your products reach their destination on schedule, every time.",
      image: "/air.jpg",
      imagePosition: "right",
      capabilities: [
        "Express and deferred air cargo options tailored to your timeline and budget",
        "Strategic partnerships with leading international airlines for guaranteed space allocation",
        "Door-to-door service from collection to final delivery",
        "Complete cargo consolidation and deconsolidation facilities",
        "Specialized handling for temperature-sensitive and high-value goods",
        "Full charter services available for urgent or oversized shipments",
        "Certified handling of dangerous goods by IATA-trained professionals"
      ],
      features: [
        { label: "Major Airports", value: "Karachi, Lahore, Islamabad, Faisalabad, Sialkot" },
        { label: "Industries", value: "Pharmaceuticals, Electronics, Automotive, Fashion" },
        { label: "Tracking", value: "Real-time monitoring and proactive communication" }
      ]
    },
    {
      id: "ocean-freight",
      title: "Ocean Freight",
      headline: "Global Ocean Shipping Solutions Built for Efficiency",
      description: "Navigate international trade with confidence through FNW Logistics' comprehensive ocean freight services. We provide flexible sea cargo solutions that optimize your supply chain costs without compromising reliability.",
      image: "/ocean.jpg",
      imagePosition: "left",
      capabilities: [
        "Full Container Load (FCL) services for dedicated shipment capacity",
        "Less than Container Load (LCL) options for cost-effective smaller volumes",
        "Break-bulk and out-of-gauge cargo handling for oversized equipment",
        "Reefer container services for temperature-controlled shipments",
        "Hazmat cargo transportation with certified safety protocols",
        "Buyer consolidation and order management services"
      ],
      features: [
        { label: "Ports", value: "Karachi Port and Port Qasim operations" },
        { label: "Services", value: "FCL, LCL, Reefer, Break-bulk" },
        { label: "Coverage", value: "Global carrier network partnerships" }
      ]
    },
    {
      id: "road-freight",
      title: "Road Freight",
      headline: "Reliable Road Transportation Across Pakistan and Beyond",
      description: "FNW Logistics operates an extensive road freight network delivering cargo efficiently throughout Pakistan and across international borders. Our modern fleet and experienced drivers ensure safe, timely deliveries.",
      image: "/road.jpg",
      imagePosition: "background",
      capabilities: [
        "Full Truck Load (FTL) services for dedicated shipments",
        "Less than Truck Load (LTL) for cost-effective partial loads",
        "Refrigerated vehicles with advanced temperature monitoring systems",
        "Flatbed and low-bed trailers for heavy equipment and machinery",
        "Secondary distribution vehicles for last-mile delivery",
        "Cross-border transportation to Afghanistan and CIS countries"
      ],
      features: [
        { label: "Fleet", value: "Modern vehicles with GPS tracking" },
        { label: "Coverage", value: "All major cities across Pakistan" },
        { label: "Safety", value: "Certified drivers and comprehensive insurance" }
      ]
    },
    {
      id: "contract-logistics",
      title: "Contract Logistics",
      headline: "End-to-End Warehousing and Distribution Solutions",
      description: "FNW Logistics provides integrated contract logistics services that streamline your entire supply chain. From warehousing to distribution, we manage your inventory with precision and efficiency.",
      image: "/contract.jpg",
      imagePosition: "right",
      capabilities: [
        "Multi-user and dedicated storage facilities",
        "Climate-controlled environment protection from dust, heat, and humidity",
        "Modern racking systems maximizing storage capacity",
        "State-of-the-art material handling equipment",
        "Cross-docking capabilities for fast turnaround",
        "Returns management and quality control procedures"
      ],
      features: [
        { label: "Warehousing", value: "Climate-controlled facilities" },
        { label: "Technology", value: "Real-time inventory tracking" },
        { label: "Services", value: "Distribution, fulfillment, returns" }
      ]
    },
    {
      id: "project-logistics",
      title: "Project & Heavy Lift Logistics",
      headline: "Specialized Solutions for Complex Cargo Movements",
      description: "FNW Logistics brings proven expertise in managing complex project logistics for heavy equipment, oversized cargo, and specialized industrial shipments. Our dedicated project teams ensure flawless execution from planning to delivery.",
      image: "/project.jpg",
      imagePosition: "left",
      capabilities: [
        "Oil and gas sector equipment transportation",
        "Power plant and energy project logistics",
        "Mining and industrial machinery movement",
        "Telecommunications infrastructure deployment",
        "Heavy lift operations up to several hundred tons",
        "Break-bulk and out-of-gauge cargo handling"
      ],
      features: [
        { label: "Expertise", value: "Oil & Gas, Power, Mining sectors" },
        { label: "Capacity", value: "Heavy lift up to several hundred tons" },
        { label: "Services", value: "End-to-end project management" }
      ]
    },
    {
      id: "transit-trade",
      title: "Transit Trade",
      headline: "Seamless Cross-Border Logistics to Central Asia",
      description: "FNW Logistics is your gateway to CIS countries and Central Asian markets through Pakistan's strategic land corridor. Our TIR Convention certification enables hassle-free international transit trade.",
      image: "/transit.jpg",
      imagePosition: "background",
      capabilities: [
        "Direct access to markets in Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Turkmenistan, and Azerbaijan",
        "Most cost-effective route to 60+ million CIS population",
        "Faster transit times compared to alternative sea routes",
        "No transshipment required—direct door-to-door movement",
        "Simplified customs procedures under TIR Convention",
        "TIR-certified vehicles and operations"
      ],
      features: [
        { label: "Coverage", value: "CIS countries and Central Asia" },
        { label: "Certification", value: "TIR Convention certified" },
        { label: "Advantage", value: "Cost-effective land routes" }
      ]
    },
    {
      id: "customs-brokerage",
      title: "Custom House Brokerage",
      headline: "Expert Customs Clearance for Smooth Trade Operations",
      description: "Navigate Pakistan's customs regulations with confidence through FNW Logistics' professional customs brokerage services. Our licensed customs agents ensure fast, compliant clearance of your shipments.",
      image: "/house.jpg",
      imagePosition: "right",
      capabilities: [
        "Import and export customs documentation",
        "Tariff classification and duty calculation",
        "Customs declaration filing and processing",
        "Duty drawback and refund claims",
        "SRO benefit applications and compliance",
        "Bonded warehouse and transit procedures"
      ],
      features: [
        { label: "Coverage", value: "All major ports and airports" },
        { label: "Expertise", value: "Licensed customs house agents" },
        { label: "Services", value: "Fast-track clearance capabilities" }
      ]
    },
    {
      id: "charter-services",
      title: "Charter Services",
      headline: "Dedicated Charter Solutions for Urgent and Oversized Cargo",
      description: "When standard shipping schedules don't meet your urgent requirements, FNW Logistics arranges dedicated charter services by air and sea. We provide flexible, customized charter solutions for time-critical and special cargo.",
      image: "/charter.jpg",
      imagePosition: "left",
      capabilities: [
        "Full aircraft charter for urgent bulk shipments",
        "Part charter options for cost-effective urgent cargo",
        "Specialized aircraft for oversized and heavy equipment",
        "Vessel charter for break-bulk and project cargo",
        "Roll-on/roll-off (RoRo) vessel arrangements",
        "Heavy lift vessel coordination"
      ],
      features: [
        { label: "Air Charter", value: "Full and part aircraft charter" },
        { label: "Sea Charter", value: "Vessel and RoRo arrangements" },
        { label: "Ideal For", value: "Emergency and oversized cargo" }
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/shipping.jpg')",
            zIndex: 0
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(39,39,39,0.7)' }}></div>
        </div>
        
        <div className="relative w-full py-8 sm:py-10" style={{ zIndex: 2 }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-white">Comprehensive</span>
                <br />
                <span className="text-brand-accent">Logistics Solutions</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                From air freight to project logistics, we deliver end-to-end supply chain solutions 
                that power your business growth across Pakistan and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="bg-white py-8 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeService === index
                    ? 'bg-brand-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`py-16 sm:py-20 ${
            service.imagePosition === 'background' 
              ? 'relative overflow-hidden' 
              : 'bg-white'
          }`}
          style={{
            display: activeService === index ? 'block' : 'none'
          }}
        >
          {/* Background Image for specific services */}
          {service.imagePosition === 'background' && (
            <>
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${service.image}')`,
                  zIndex: 0
                }}
              />
              <div className="absolute inset-0 bg-black/60" style={{ zIndex: 1 }}></div>
            </>
          )}

          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
            service.imagePosition === 'background' ? 'relative z-10' : ''
          }`}>
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              service.imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''
            }`}>
              
              {/* Image */}
              {service.imagePosition !== 'background' && (
                <div className={`${
                  service.imagePosition === 'left' ? 'lg:col-start-2' : ''
                }`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className={`${
                service.imagePosition === 'left' ? 'lg:col-start-1' : ''
              } ${service.imagePosition === 'background' ? 'text-white' : ''}`}>
                <div className="mb-6">
                  <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${
                    service.imagePosition === 'background' ? 'text-white' : 'text-brand-dark'
                  }`}>
                    {service.headline}
                  </h2>
                  
                  <p className={`text-lg leading-relaxed mb-8 ${
                    service.imagePosition === 'background' ? 'text-white/90' : 'text-gray-700'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="mb-8">
                  <h3 className={`text-xl font-semibold mb-4 ${
                    service.imagePosition === 'background' ? 'text-white' : 'text-brand-primary'
                  }`}>
                    Our {service.title} Capabilities:
                  </h3>
                  <ul className="space-y-3">
                    {service.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          service.imagePosition === 'background' ? 'bg-white' : 'bg-brand-primary'
                        }`}></div>
                        <span className={`text-sm ${
                          service.imagePosition === 'background' ? 'text-white/90' : 'text-gray-700'
                        }`}>
                          {capability}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={`p-4 rounded-xl ${
                      service.imagePosition === 'background' 
                        ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                        : 'bg-gray-50'
                    }`}>
                      <div className={`text-sm font-semibold mb-1 ${
                        service.imagePosition === 'background' ? 'text-white' : 'text-brand-primary'
                      }`}>
                        {feature.label}
                      </div>
                      <div className={`text-xs ${
                        service.imagePosition === 'background' ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {feature.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-accent py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Supply Chain?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let our logistics experts design a customized solution that meets your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
            <a 
              href="tel:+923100100282" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-brand-primary transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;