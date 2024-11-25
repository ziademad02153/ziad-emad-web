import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <img src="/logo.png" alt="Jaguar Store" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {t('storeName')}
            </span>
          </div>

          {/* Contact Info */}
          <div className="w-full max-w-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-6">
              {t('contactUs')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="flex flex-col items-center space-y-2 group">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-full 
                              group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 
                              transition-colors duration-300">
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 
                                 group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('email')}
                </span>
                <a 
                  href="mailto:contact@jaguarstore.com" 
                  className="text-sm text-gray-600 dark:text-gray-400 
                           hover:text-emerald-500 dark:hover:text-emerald-400 
                           transition-colors duration-300"
                >
                  contact@jaguarstore.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center space-y-2 group">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-full 
                              group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 
                              transition-colors duration-300">
                  <Phone className="w-5 h-5 text-gray-600 dark:text-gray-300 
                                  group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('phone')}
                </span>
                <a 
                  href="tel:+201234567890" 
                  className="text-sm text-gray-600 dark:text-gray-400 
                           hover:text-emerald-500 dark:hover:text-emerald-400 
                           transition-colors duration-300"
                >
                  +20 123 456 7890
                </a>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center space-y-2 group">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-full 
                              group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 
                              transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-300 
                                   group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('address')}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {t('storeAddress')}
                </span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center pt-4 border-t border-gray-200 dark:border-gray-700 w-full">
            &copy; {new Date().getFullYear()} {t('storeName')}. {t('allRightsReserved')}
          </div>
        </div>
      </div>
    </footer>
  );
}