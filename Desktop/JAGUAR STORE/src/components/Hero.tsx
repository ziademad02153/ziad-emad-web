import React from 'react';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          className="w-full h-full object-cover"
          alt="JAGUAR Fashion"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center text-white mx-auto">
          <div className="flex justify-center mb-8">
            <ShoppingBag className="h-16 w-16" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
            JAGUAR
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto text-gray-300">
            أحدث صيحات الموضة والأزياء العصرية في بنها
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              تسوق الآن
              <ArrowLeft className="mr-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border-2 border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-100 transition-all duration-300"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}