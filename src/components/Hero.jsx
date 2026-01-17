"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { MdOutlineExplore, MdArrowForward } from "react-icons/md";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
      title: "Premium Sound Experience",
      subtitle: "Discover the nest of high-quality audio products.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
      title: "Smart Tech Lifestyle",
      subtitle: "Curating the best gadgets for your daily needs.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop",
      title: "Elegant Design Gear",
      subtitle: "Where style meets performance in every product.",
    },
  ];

  return (
    <div className="relative w-full h-[85vh] md:h-screen bg-gray-900">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              <div className="relative h-full flex items-center justify-center text-center px-4">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-7xl font-black text-white mb-6 drop-shadow-lg leading-tight animate-slide-up">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/items"
                      className="btn btn-primary btn-lg rounded-2xl px-8 border-none bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-xl shadow-indigo-500/20 group"
                    >
                      Explore Catalog
                      <MdArrowForward className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/login"
                      className="btn btn-outline btn-lg rounded-2xl px-8 text-white border-white hover:bg-white hover:text-black transition-all"
                    >
                      Join Nest
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
