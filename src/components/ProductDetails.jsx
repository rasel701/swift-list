"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MdOutlineArrowBack,
  MdStar,
  MdOutlineInventory2,
  MdOutlineCategory,
  MdOutlineVerified,
  MdAddShoppingCart,
  MdOutlineDateRange,
  MdOutlineDescription,
} from "react-icons/md";

const ProductDetails = ({ product }) => {
  const data = product?.message || product;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading product...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05070A] via-[#070B14] to-[#05070A] text-white py-28 px-4 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[-15%] right-[-10%] w-[45%] h-[45%] bg-indigo-600/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[45%] h-[45%] bg-blue-600/10 rounded-full blur-[140px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 font-bold mb-14 transition"
        >
          <MdOutlineArrowBack />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-[#0B0F1A] border border-white/10 shadow-2xl">
              <img
                src={data.image || "/placeholder.png"}
                alt={data.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product ID */}
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl px-5 py-2 rounded-2xl border border-white/10">
              <span className="text-xs font-black text-indigo-400 tracking-widest">
                ID · {product?._id}
              </span>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Category */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-black uppercase tracking-widest">
                {data.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400 font-bold uppercase">
                <MdOutlineVerified className="text-blue-500" />
                Verified
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              {data.name}
            </h1>

            {/* Rating + Date */}
            <div className="flex flex-wrap gap-6 items-center text-gray-400 border-b border-white/10 pb-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <MdStar key={i} />
                  ))}
                </div>
                <span className="text-sm font-bold">(4.9)</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <MdOutlineDateRange className="text-indigo-400" />
                {data.date
                  ? new Date(data.date).toLocaleDateString()
                  : "Recently added"}
              </div>
            </div>

            {/* Price */}
            <div className="mb-10">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-black mb-2">
                Price
              </p>
              <h2 className="text-5xl font-black bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                ${data.price}
              </h2>
            </div>

            {/* Description */}
            <div className="mb-10">
              <h3 className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 font-black mb-4">
                <MdOutlineDescription className="text-indigo-400" />
                Description
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <MdOutlineInventory2
                  size={22}
                  className="text-indigo-400 mb-2"
                />
                <p className="text-xs font-bold text-gray-300">Availability</p>
                <p className="text-[11px] text-gray-500 uppercase">In Stock</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <MdOutlineCategory size={22} className="text-indigo-400 mb-2" />
                <p className="text-xs font-bold text-gray-300">Category</p>
                <p className="text-[11px] text-gray-500 uppercase">
                  {data.category}
                </p>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-500 transition font-black py-6 rounded-[2rem] text-xl flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/20"
            >
              <MdAddShoppingCart size={24} />
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
