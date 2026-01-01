import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold">QuickFixPro</h3>
          <p className="mt-3 text-sm text-purple-200">
            Your trusted partner for laptop repairs, desktop upgrades, projector installations, 
            TV setups, home maintenance, and chimney services in Bhubaneswar. Fast, reliable, 
            and professional service for all your tech and home needs.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {["Home", "Services", "About", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="text-purple-200 hover:text-white transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-purple-200">
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2 flex-shrink-0" /> 9337249713
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2 flex-shrink-0" /> ommphoto143@gmail
            </li>
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" /> 
              <span>A/5, Near Angana Restaurant, Shahid Nagar, Bhubaneswar</span>
            </li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-lg font-semibold">Business Hours</h3>
          <ul className="mt-3 space-y-2 text-purple-200">
            <li>Monday - Saturday</li>
            <li className="font-semibold">9am - 8pm</li>
            <li className="mt-3">Sunday</li>
            <li className="font-semibold">Closed</li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <a href="https://www.facebook.com/share/19vsDZv15T/" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/qui_ckfixpro?igsh=MXJjMDVuZG5zbGc4Ng==" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white transition">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>
      
      {/* Copyright Section */}
      <div className="mt-8 text-center text-purple-300 text-sm">
        © {new Date().getFullYear()} QuickFixPro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;