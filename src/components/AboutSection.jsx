"use client";
import React from "react";
import { motion } from "framer-motion"; // Framer Motion Import
import {
  MdVerifiedUser,
  MdOutlineAutoGraph,
  MdOutlineFlashOn,
} from "react-icons/md";

const AboutSection = () => {
  const points = [
    {
      title: "Quality Assurance",
      desc: "Every item in our nest undergoes a rigorous quality check to ensure excellence.",
      icon: <MdVerifiedUser className="text-indigo-600" size={24} />,
    },
    {
      title: "Fast Scalability",
      desc: "Our platform is designed to grow with your needs, offering seamless management.",
      icon: <MdOutlineFlashOn className="text-indigo-600" size={24} />,
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Image Content with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                alt="ProductNest Operations"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Card with Infinite Floating Animation */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-6 md:right-0 z-20 bg-indigo-600 p-8 rounded-3xl shadow-xl text-white"
            >
              <p className="text-4xl font-black italic">10k+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
                Active Listings
              </p>
            </motion.div>

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-50"></div>
          </motion.div>

          {/* Right Side: Text Content with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full">
              About ProductNest
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Empowering Your Business with a Smarter{" "}
              <span className="text-indigo-600">Product Nest</span>.
            </h2>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              ProductNest is more than just a listing platform; it's a dedicated
              ecosystem for your products. We provide the tools you need to
              organize and showcase your inventory.
            </p>

            {/* Points with Stagger Effect */}
            <div className="space-y-6 mb-10">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                >
                  <div className="bg-indigo-50 p-3 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {point.title}
                    </h4>
                    <p className="text-gray-500">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none rounded-2xl px-10 btn-lg normal-case shadow-lg shadow-indigo-100 flex items-center gap-2 group text-white"
            >
              View Our Story
              <MdOutlineAutoGraph className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
