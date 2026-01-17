"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdGroups, MdInventory2, MdStars, MdPublic } from "react-icons/md";

const Stats = () => {
  const stats = [
    {
      id: 1,
      label: "Active Users",
      value: "12k+",
      icon: <MdGroups className="text-indigo-400" size={32} />,
      desc: "Community members",
    },
    {
      id: 2,
      label: "Total Products",
      value: "25k+",
      icon: <MdInventory2 className="text-blue-400" size={30} />,
      desc: "Items in the nest",
    },
    {
      id: 3,
      label: "Happy Reviews",
      value: "98%",
      icon: <MdStars className="text-amber-400" size={30} />,
      desc: "Positive feedback",
    },
    {
      id: 4,
      label: "Global Reach",
      value: "50+",
      icon: <MdPublic className="text-cyan-400" size={30} />,
      desc: "Countries supported",
    },
  ];

  return (
    <section className="py-24 bg-[#05070A] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-indigo-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="relative group p-8 rounded-[2.5rem] bg-[#0A0D14] border border-white/5 hover:border-indigo-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500">
                  {stat.icon}
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                  {stat.value}
                </h3>

                <p className="text-sm font-black text-indigo-400 uppercase tracking-widest mb-1">
                  {stat.label}
                </p>

                <p className="text-xs text-gray-500 font-medium tracking-wide italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
