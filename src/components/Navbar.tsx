import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCartStore } from '../store/cartStore';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, toggleCart } = useCartStore();
  const { t } = useTranslation();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <img src="https://i.imgur.com/izEdImU.jpg" alt="JAGUAR" className="h-12 w-12 rounded-full object-cover" />
              <h1 className="text-2xl font-bold">JAGUAR</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
                {t('nav.home')}
              </a>
              <a href="#products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
                {t('nav.products')}
              </a>
              <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
                {t('nav.contact')}
              </a>
              <ThemeToggle />
              <LanguageToggle />
              <button 
                onClick={toggleCart}
                className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              {t('nav.home')}
            </a>
            <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              {t('nav.products')}
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800">
              {t('nav.contact')}
            </a>
            <div className="flex items-center space-x-2 px-3 py-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}