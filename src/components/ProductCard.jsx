"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MdOutlineAddShoppingCart,
  MdStar,
  MdOutlineLabel,
} from "react-icons/md";
import Link from "next/link";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <Link href={`/items/${product._id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative bg-[#0D1117] border border-white/5 rounded-[2.5rem] p-5 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_20px_40px_rgba(79,70,229,0.15)] flex flex-col h-full"
      >
        {/* Product Image Area */}
        <div className="relative h-64 w-full rounded-[2rem] overflow-hidden bg-[#161B22]">
          <img
            src={product?.message.image}
            alt={product?.message.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Floating Category Tag */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
            {product?.message.category}
          </div>
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Product Info */}
        <div className="mt-6 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">
              {product?.message.name}
            </h3>
            <div className="flex items-center gap-1 text-amber-400 bg-white/5 px-2 py-1 rounded-lg">
              <MdStar size={16} />
              <span className="text-xs font-bold text-gray-300">4.9</span>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
            {product?.message.description}
          </p>

          {/* ID and Price Row */}
          <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-5">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-indigo-500 uppercase tracking-tighter mb-1 flex items-center gap-1">
                <MdOutlineLabel /> {product.id}
              </span>
              <span className="text-2xl font-black text-white">
                ${product?.message.price}
              </span>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="h-14 w-14 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl flex items-center justify-center transition-all shadow-lg shadow-indigo-500/20 group-hover:rotate-[360deg] duration-700"
            >
              <MdOutlineAddShoppingCart size={24} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
