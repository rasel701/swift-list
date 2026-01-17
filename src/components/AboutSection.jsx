// "use client";
// import React from "react";
// import { motion } from "framer-motion"; // Framer Motion Import
// import {
//   MdVerifiedUser,
//   MdOutlineAutoGraph,
//   MdOutlineFlashOn,
// } from "react-icons/md";

// const AboutSection = () => {
//   const points = [
//     {
//       title: "Quality Assurance",
//       desc: "Every item in our nest undergoes a rigorous quality check to ensure excellence.",
//       icon: <MdVerifiedUser className="text-indigo-600" size={24} />,
//     },
//     {
//       title: "Fast Scalability",
//       desc: "Our platform is designed to grow with your needs, offering seamless management.",
//       icon: <MdOutlineFlashOn className="text-indigo-600" size={24} />,
//     },
//   ];

//   return (
//     <section className="py-24 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           {/* Left Side: Image Content with Scroll Animation */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="flex-1 relative"
//           >
//             <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
//               <img
//                 src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
//                 alt="ProductNest Operations"
//                 className="w-full h-auto object-cover"
//               />
//             </div>

//             {/* Floating Card with Infinite Floating Animation */}
//             <motion.div
//               animate={{ y: [0, -20, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//               className="absolute -bottom-10 -right-6 md:right-0 z-20 bg-indigo-600 p-8 rounded-3xl shadow-xl text-white"
//             >
//               <p className="text-4xl font-black italic">10k+</p>
//               <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
//                 Active Listings
//               </p>
//             </motion.div>

//             <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-50"></div>
//           </motion.div>

//           {/* Right Side: Text Content with Staggered Animation */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="flex-1"
//           >
//             <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full">
//               About ProductNest
//             </div>

//             <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
//               Empowering Your Business with a Smarter{" "}
//               <span className="text-indigo-600">Product Nest</span>.
//             </h2>

//             <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//               ProductNest is more than just a listing platform; it's a dedicated
//               ecosystem for your products. We provide the tools you need to
//               organize and showcase your inventory.
//             </p>

//             {/* Points with Stagger Effect */}
//             <div className="space-y-6 mb-10">
//               {points.map((point, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.4 + index * 0.2 }}
//                   className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group"
//                 >
//                   <div className="bg-indigo-50 p-3 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
//                     {point.icon}
//                   </div>
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-800 mb-1">
//                       {point.title}
//                     </h4>
//                     <p className="text-gray-500">{point.desc}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none rounded-2xl px-10 btn-lg normal-case shadow-lg shadow-indigo-100 flex items-center gap-2 group text-white"
//             >
//               View Our Story
//               <MdOutlineAutoGraph className="group-hover:translate-x-1 transition-transform" />
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MdVerifiedUser,
  MdOutlineAutoGraph,
  MdOutlineFlashOn,
  MdLayers,
} from "react-icons/md";

const AboutSection = () => {
  const points = [
    {
      title: "Quality Assurance",
      desc: "Every item in our nest undergoes a rigorous quality check to ensure excellence.",
      icon: <MdVerifiedUser size={24} />,
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Fast Scalability",
      desc: "Our platform is designed to grow with your needs, offering seamless management.",
      icon: <MdOutlineFlashOn size={24} />,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-[#05070A] relative overflow-hidden">
      {/* Background Orbs for Premium Look */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Side: Image Content with Premium Borders */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 relative"
          >
            {/* Main Image Wrapper */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
              <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                alt="ProductNest Operations"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Stats Card - Glassmorphism */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:right-8 z-20 bg-[#0A0D14]/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <MdLayers className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-3xl font-black text-white italic tracking-tighter">
                    10k+
                  </p>
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">
                    Active Listings
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Glow behind image */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-black tracking-[0.2em] text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              Our Ecosystem
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              Smarter Solutions for your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Product Nest.
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-12 leading-relaxed font-medium">
              ProductNest is not just a platform; it's a sophisticated ecosystem
              engineered for excellence. We provide high-end tools to showcase,
              organize, and scale your inventory with absolute precision.
            </p>

            {/* Points with Glass Effect */}
            <div className="space-y-6 mb-12">
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="flex items-start gap-5 p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-500 group"
                >
                  <div
                    className={`p-3 rounded-2xl bg-gradient-to-br ${point.gradient} text-white shadow-lg transition-transform duration-500 group-hover:scale-110`}
                  >
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {point.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-3 bg-white text-black font-black px-10 py-5 rounded-2xl transition-all overflow-hidden"
            >
              <span className="relative z-10">Discover Our Story</span>
              <MdOutlineAutoGraph className="relative z-10 group-hover:translate-x-1 transition-transform text-indigo-600 text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
