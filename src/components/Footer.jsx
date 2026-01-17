"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { MdOutlineMail, MdRocketLaunch } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#05070A] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-indigo-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white tracking-tighter">
              Product<span className="text-indigo-500">Nest.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              The ultimate marketplace for premium digital and physical assets.
              Secure, fast, and built for the modern creator.
            </p>
            <div className="flex gap-4">
              {[
                <FaFacebookF />,
                <FaTwitter />,
                <FaInstagram />,
                <FaLinkedinIn />,
                <FaGithub />,
              ].map((icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, color: "#6366f1" }}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 transition-all"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                "Home",
                "Marketplace",
                "Add Product",
                "Community",
                "Our Mission",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                "Documentation",
                "Privacy Policy",
                "Terms of Service",
                "Help Center",
                "API Status",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white font-bold">Join the Nest</h3>
            <p className="text-gray-400 text-sm font-medium leading-relaxed">
              Get the latest product updates and market insights directly in
              your inbox.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 py-4 px-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 text-white text-sm"
              />
              <button className="absolute right-2 top-2 p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-all shadow-lg shadow-indigo-500/20">
                <MdRocketLaunch size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
            © 2026 ProductNest. Built by{" "}
            <span className="text-indigo-400">Gemini AI</span>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              System Status: Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
