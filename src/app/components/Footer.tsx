import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo */}
          <div className="md:col-span-4 flex items-start">
            <Image
              src="/logo-fnw.jpg"
              alt="Company Logo"
              width={220}
              height={70}
              className="object-contain"
            />
          </div>

          {/* Core Services */}
          <div className="md:col-span-4">
            <h3 className="text-brand-dark font-semibold text-lg mb-4">Core Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li><Link className="hover:text-brand-primary transition" href="#">Air Freight</Link></li>
              <li><Link className="hover:text-brand-primary transition" href="#">Ocean Freight</Link></li>
              <li><Link className="hover:text-brand-primary transition" href="#">Road Transport</Link></li>
              <li><Link className="hover:text-brand-primary transition" href="#">Transit Trade</Link></li>
              <li><Link className="hover:text-brand-primary transition" href="#">Custom House Brokerage</Link></li>
              <li><Link className="hover:text-brand-primary transition" href="#">Contract Logistics</Link></li>
              <li><Link className="hover:text-brand-primary transition" href="#">Charter Services</Link></li>
              <li><Link className="hover:text-brand-primary transition" href="#">Project & Heavy Lift Logistics</Link></li>
        
            </ul>
          </div>

          {/* Contact / Offices */}
          <div className="md:col-span-4">
            <h3 className="text-brand-dark font-semibold text-lg mb-4">Contact</h3>
            <div className="text-gray-700 space-y-4">
              <div>
                <p className="font-medium text-brand-dark">Head Office</p>
                <address className="not-italic mt-1">
                  <p>#301, Ahmed Arcade, Block 5</p>
                  <p>Clifton, Karachi, Pakistan</p>
                </address>
              </div>

              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-gray-500">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.01l-2.21 2.22z"/>
                  </svg>
                  <Link href="tel:+923100100282" className="hover:text-brand-primary">+92 310 0100282</Link>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-gray-500">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l7.4 5.55a1 1 0 001.2 0L20 8.24V18H4z"/>
                  </svg>
                  <Link href="mailto:customer.services@fnw-logistics.com" className="hover:text-brand-primary">customer.services@fnw-logistics.com</Link>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-gray-500">
                    <path d="M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm1 11.59V6a1 1 0 00-2 0v7a1 1 0 00.293.707l4 4a1 1 0 001.414-1.414z"/>
                  </svg>
                  <span>Mon–Fri: 9:00–18:00 PKT</span>
                </li>
              </ul>
            </div>

            {/* <div className="mt-6">
              <p className="font-medium text-brand-dark">Regional Offices</p>
              <p className="text-gray-700">Karachi | Islamabad | Lahore</p>
            </div> */}

            {/* <div className="mt-4">
              <p className="font-medium text-brand-dark">Branch Offices</p>
              <p className="text-gray-700">Faisalabad | Multan | Sialkot</p>
              <p className="text-gray-700">Peshawar | Quetta</p>
              <p className="text-gray-700">Rahimyar Khan</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-gray-600">© {year} FNW Logistics. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {/* <Link href="#" className="text-gray-600 hover:text-brand-primary">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-brand-primary">Site Map</Link>
            <Link href="#" className="text-gray-600 hover:text-brand-primary">Cookies Settings</Link> */}
            {/* <Link aria-label="LinkedIn" href="#" className="text-gray-600 hover:text-brand-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.2c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.7V24h-4V8z"/>
              </svg>
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


