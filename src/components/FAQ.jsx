"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdExpandMore, MdHelpOutline } from "react-icons/md";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How do I list a product on ProductNest?",
      answer:
        "To list a product, you need to log in to your account and navigate to the 'Add Item' page. Fill in the details like name, price, and image, then hit publish!",
    },
    {
      id: 2,
      question: "Is there a limit to how many items I can add?",
      answer:
        "No, ProductNest allows you to create an unlimited nest of products. However, ensure each item meets our premium quality guidelines.",
    },
    {
      id: 3,
      question: "How secure is my transaction data?",
      answer:
        "We use high-end SSL encryption and secure cookie handling to ensure that your personal and transaction data remain 100% private.",
    },
    {
      id: 4,
      question: "Can I edit a product after publishing it?",
      answer:
        "Yes! You can go to your dashboard, select the specific product, and update any details including the price and description.",
    },
  ];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#05070A] relative overflow-hidden">
      <div className="absolute top-1/2 right-[-10%] w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-black uppercase tracking-widest mb-4"
          >
            <MdHelpOutline size={18} /> Common Questions
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Queries.
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                activeId === faq.id
                  ? "bg-[#0A0D14] border-indigo-500/50 shadow-2xl shadow-indigo-500/10"
                  : "bg-white/5 border-white/5 hover:border-white/10"
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left"
              >
                <span
                  className={`text-lg font-bold transition-colors duration-300 ${
                    activeId === faq.id ? "text-indigo-400" : "text-gray-200"
                  }`}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeId === faq.id ? 180 : 0 }}
                  className={`p-2 rounded-xl ${activeId === faq.id ? "bg-indigo-500 text-white" : "bg-white/5 text-gray-500"}`}
                >
                  <MdExpandMore size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-gray-400 font-medium leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
