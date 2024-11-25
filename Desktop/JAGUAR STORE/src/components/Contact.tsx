import React from 'react';
import { Phone, MapPin } from 'lucide-react';
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
              className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="h-10 w-10 mx-auto text-white" />
              <h3 className="mt-4 text-xl font-bold">{t('contact.whatsapp')}</h3>
              <p className="mt-2">+201001375582</p>
            </a>

            {/* Social Media */}
            <div className="grid grid-cols-2 gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/jaguarr.eg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white p-3 rounded-full w-fit mx-auto">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="url(#instagram-gradient)" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.901 4.901 0 0 0-1.772 1.153A4.902 4.902 0 0 0 2.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.772 4.901 4.901 0 0 0 1.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.901 4.901 0 0 0 1.772-1.153 4.902 4.902 0 0 0 1.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 0 0-1.153-1.772 4.901 4.901 0 0 0-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.181.8.398 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858-.181.466-.398.8-.748 1.15-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 0 1-1.15-.748 3.098 3.098 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.181-.466.398-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058z" fill="url(#instagram-gradient)" />
                    <defs>
                      <linearGradient id="instagram-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#833AB4"/>
                        <stop offset="0.5" stopColor="#FD1D1D"/>
                        <stop offset="1" stopColor="#FCB045"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-center">Instagram</h3>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/jaguarstore00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white p-3 rounded-full w-fit mx-auto">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-bold text-center">Facebook</h3>
              </a>
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