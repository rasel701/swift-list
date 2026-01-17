"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MdOutlineFingerprint,
  MdOutlineInventory,
  MdOutlineDescription,
  MdAttachMoney,
  MdOutlineCategory,
  MdOutlineAddPhotoAlternate,
  MdCloudUpload,
  MdAutoAwesome,
} from "react-icons/md";
import { toast } from "react-toastify";

const AddProductPage = () => {
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.value;
    const newProduct = {
      name: productName,
      price: parseFloat(price),
      category,
      description,
      image,
    };
    const res = await fetch("http://localhost:3000/api/all-products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    console.log(data);
    if (data.acknowledged) {
      toast.success("Product added successfully!");
      form.reset();
    } else {
      toast.error("Failed to add product.");
    }
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
            <MdAutoAwesome /> Inventory Management
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tight">
            Deploy New{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Product
            </span>
          </h1>
          <p className="text-gray-400 font-medium">
            Configure your product parameters for the global marketplace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-[#0A0D14]/60 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/5 p-8 md:p-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-[2.5rem] pointer-events-none"></div>

          <form onSubmit={handleAddProduct} className="space-y-8 relative z-10">
            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 ml-1">
                <MdOutlineInventory className="text-indigo-400 text-lg" />{" "}
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                placeholder="Name of Item"
                className="w-full bg-white/5 border border-white/10 py-4 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white/10 transition-all text-white placeholder:text-gray-600 font-medium"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 ml-1">
                  <MdAttachMoney className="text-indigo-400 text-lg" /> Market
                  Price ($)
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  name="price"
                  className="w-full bg-white/5 border border-white/10 py-4 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white/10 transition-all text-white placeholder:text-gray-600 font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 ml-1">
                  <MdOutlineCategory className="text-indigo-400 text-lg" />{" "}
                  Category
                </label>
                <div className="relative">
                  <select
                    name="category"
                    className="w-full bg-white/5 border border-white/10 py-4 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white/10 transition-all text-white font-medium appearance-none cursor-pointer"
                  >
                    <option className="bg-[#0A0D14]" value="">
                      Select Category
                    </option>
                    <option className="bg-[#0A0D14]" value="electronics">
                      Electronics
                    </option>
                    <option className="bg-[#0A0D14]" value="fashion">
                      Fashion
                    </option>
                    <option className="bg-[#0A0D14]" value="home">
                      Home Decor
                    </option>
                    <option className="bg-[#0A0D14]" value="Gadgets">
                      Gadgets
                    </option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 ml-1">
                <MdOutlineDescription className="text-indigo-400 text-lg" />{" "}
                Product Description
              </label>
              <textarea
                rows="4"
                name="description"
                placeholder="Technical specifications and features..."
                className="w-full bg-white/5 border border-white/10 py-4 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white/10 transition-all text-white placeholder:text-gray-600 font-medium resize-none"
              ></textarea>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 ml-1">
                <MdOutlineAddPhotoAlternate className="text-indigo-400 text-lg" />{" "}
                Image
              </label>
              <input
                type="text"
                name="image"
                placeholder="image-url"
                className="w-full bg-white/5 border border-white/10 py-4 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white/10 transition-all text-white placeholder:text-gray-600 font-medium"
              />
            </div>

            <div className="pt-6 flex flex-col md:flex-row gap-4">
              <motion.button
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(79, 70, 229, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-black py-5 rounded-2xl transition-all text-lg shadow-xl"
              >
                Launch Product
              </motion.button>
              <button
                type="button"
                className="px-10 py-5 bg-white/5 hover:bg-white/10 text-gray-400 font-bold rounded-2xl border border-white/5 transition-all"
              >
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddProductPage;
