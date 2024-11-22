import React from 'react';
import { Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold">{t('contact.title')}</h2>
          <p className="mt-4 text-gray-400">{t('contact.subtitle')}</p>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/201001375582" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-400 to-green-600 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-10 w-10 mx-auto text-white" />
              <h3 className="mt-4 text-xl font-bold">{t('contact.whatsapp')}</h3>
              <p className="mt-2">+201001375582</p>
            </a>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-purple-400 to-pink-600 p-6 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-4">{t('contact.social')}</h3>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.instagram.com/jaguarr.eg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-all duration-300 bg-white p-3 rounded-full"
                >
                  <Instagram className="h-8 w-8 text-pink-600" />
                </a>
                <a 
                  href="https://www.facebook.com/jaguarstore00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-all duration-300 bg-white p-3 rounded-full"
                >
                  <Facebook className="h-8 w-8 text-blue-600" />
                </a>
              </div>
            </div>

            {/* Location */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=بنها+كلية+التجارة"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MapPin className="h-10 w-10 mx-auto text-white" />
              <h3 className="mt-4 text-xl font-bold">{t('contact.location')}</h3>
              <p className="mt-2 text-sm">Faculty of Commerce St., Benha, Qalyubia</p>
              <span className="mt-4 inline-block text-sm border-b border-white">
                {t('contact.openInMaps')}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}