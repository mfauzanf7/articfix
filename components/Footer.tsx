import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <Image
            src="/logo.jpeg"
            alt="ArcticFix"
            width={60}
            height={60}
          />

          <h3 className="mt-4 text-xl font-bold">
            ArcticFix Solutions
          </h3>

          <p className="mt-3 text-gray-400">
            Engineering Beyond Maintenance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">
            Quick Links
          </h3>

          <ul className="space-y-3 mt-4 text-gray-400">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg">
            Services
          </h3>

          <ul className="space-y-3 mt-4 text-gray-400">
            <li>Electrical</li>
            <li>HVAC</li>
            <li>Mechanical</li>
            <li>Plumbing</li>
            <li>Facility Management</li>
            <li>Smart Monitoring</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg">
            Contact
          </h3>

          <p className="mt-4 text-gray-400">
            📧 fauzanfirmansyah87@gmail.com
          </p>

          <p className="mt-3 text-gray-400">
            📍 Indonesia
          </p>

          <p className="mt-3 text-gray-400">
            📞 WhatsApp
          </p>
        </div>

      </div>

      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-500">
        © 2026 ArcticFix Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}