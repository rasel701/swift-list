"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdFormatQuote, MdStar } from "react-icons/md";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Tech Enthusiast",
      comment:
        "ProductNest has completely changed how I discover premium gadgets. The UI is incredibly smooth, and the quality of items listed is top-notch!",
      avatar: "https://i.pravatar.cc/150?u=alex",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Interior Designer",
      comment:
        "I found the most unique home decor pieces here. The platform feels premium and the verified sellers give me peace of mind every time I shop.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      rating: 5,
    },
    {
      id: 3,
      name: "Marcus Thorne",
      role: "Professional Photographer",
      comment:
        "As a seller, the 'Add Product' flow is seamless. ProductNest is definitely the most sophisticated marketplace I've used in years.",
      avatar: "https://i.pravatar.cc/150?u=marcus",
      rating: 4,
    },
  ];

  return (
    <section className="py-24 bg-[#05070A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-indigo-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            User Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Trusted by the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Community.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-8 rounded-[2.5rem] bg-[#0A0D14] border border-white/5 hover:border-indigo-500/30 transition-all duration-500"
            >
              <div className="absolute -top-4 -right-2 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors">
                <MdFormatQuote size={120} />
              </div>

              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <MdStar key={i} size={18} />
                  ))}
                </div>

                <p className="text-gray-400 text-lg font-medium leading-relaxed mb-8 italic">
                  "{review.comment}"
                </p>

                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/20 group-hover:border-indigo-500 transition-colors">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">
                      {review.name}
                    </h4>
                    <p className="text-indigo-500 text-xs font-black uppercase tracking-widest">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
