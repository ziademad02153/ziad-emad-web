import React, { useState } from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';

const products = [
  {
    id: 1,
    name: 'طقم رياضي أسود',
    price: '750 ج.م',
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'أطقم رياضية'
  },
  {
    id: 2,
    name: 'بنطلون جينز أزرق',
    price: '650 ج.م',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'جينز'
  },
  {
    id: 3,
    name: 'قميص كاجوال',
    price: '450 ج.م',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'قمصان'
  },
  {
    id: 4,
    name: 'تيشيرت أبيض',
    price: '299 ج.م',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'تيشيرتات'
  },
  {
    id: 5,
    name: 'جاكيت جلد أسود',
    price: '1200 ج.م',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'جواكت'
  },
  {
    id: 6,
    name: 'بنطلون قماش',
    price: '550 ج.م',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'بناطيل'
  }
];

const categories = ['الكل', 'أطقم رياضية', 'جينز', 'قمصان', 'تيشيرتات', 'جواكت', 'بناطيل'];

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  const filteredProducts = selectedCategory === 'الكل'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast.success('تمت إضافة المنتج إلى السلة');
  };

  return (
    <div id="products" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">أحدث التشكيلات</h2>
          
          {/* Categories */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative aspect-w-4 aspect-h-5 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                {hoveredProduct === product.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center space-x-4">
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="p-3 bg-white rounded-full text-black hover:bg-gray-100 transition-all duration-300"
                    >
                      <ShoppingCart className="h-6 w-6" />
                    </button>
                    <button className="p-3 bg-white rounded-full text-black hover:bg-gray-100 transition-all duration-300">
                      <Heart className="h-6 w-6" />
                    </button>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}