import React from 'react';
import { useTranslation } from 'react-i18next';
import { Tiger } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Tiger className="h-8 w-8" />
            <h2 className="text-2xl font-bold">JAGUAR</h2>
          </div>
          <p className="mt-2">{t('footer.tagline')}</p>
          <p className="mt-2 text-gray-400">© {new Date().getFullYear()} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}