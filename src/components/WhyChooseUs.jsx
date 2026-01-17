"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MdSecurity,
  MdFlashOn,
  MdSupportAgent,
  MdAutoAwesome,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Ultra-Secure Nest",
      description:
        "Every product and transaction is protected by high-end encryption technology.",
      icon: <MdSecurity size={32} />,
      color: "from-blue-500/20 to-indigo-500/20",
      accent: "bg-blue-500",
    },
    {
      id: 2,
      title: "Fast Deployment",
      description:
        "List your products or get them delivered at lightning-fast speeds worldwide.",
      icon: <MdFlashOn size={32} />,
      color: "from-amber-500/20 to-orange-500/20",
      accent: "bg-amber-500",
    },
    {
      id: 3,
      title: "24/7 Expert Support",
      description:
        "Our dedicated support team is always awake to help you manage your nest.",
      icon: <MdSupportAgent size={32} />,
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "bg-emerald-500",
    },
    {
      id: 4,
      title: "Smart Analytics",
      description:
        "Get detailed insights and intelligence about your product performance.",
      icon: <MdAutoAwesome size={32} />,
      color: "from-purple-500/20 to-pink-500/20",
      accent: "bg-purple-500",
    },
  ];

  return (
    <section className="py-24 bg-[#05070A] relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-indigo-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block">
              Core Advantages
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Why Professionals <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Choose ProductNest.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-medium leading-relaxed">
              We provide the most sophisticated ecosystem for managing and
              discovering premium products with uncompromised quality and speed.
            </p>

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 text-white font-bold group border-b-2 border-indigo-600 pb-1"
            >
              Learn more about our mission
              <MdOutlineKeyboardDoubleArrowRight className="text-indigo-500 group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-[2rem] bg-gradient-to-br ${feature.color} border border-white/5 backdrop-blur-sm relative group overflow-hidden`}
              >
                <div
                  className={`absolute top-0 left-10 w-20 h-1 ${feature.accent} opacity-40`}
                ></div>

                <div className="relative z-10">
                  <div className="mb-6 text-white bg-black/20 w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
