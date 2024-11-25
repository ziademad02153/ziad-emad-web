import { useState, useEffect } from 'react';
import { useCartStore } from '../store/cartStore';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

interface Product {
  id: number;
  name: string;
  arabicName: string;
  price: string;
  image: string;
  category: string;
  arabicCategory: string;
  color: string;
  arabicColor: string;
  description: string;
  arabicDescription: string;
}

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Jaguar Jacket',
    arabicName: 'جاكيت جاكوار',
    price: '950 EGP',
    image: 'https://i.imgur.com/1TJW6vg.jpg',
    category: 'Jackets',
    arabicCategory: 'جواكت',
    color: 'Black',
    arabicColor: 'أسود',
    description: 'Street jacket with zipper and side pockets',
    arabicDescription: 'جاكيت ستريت بسحاب وجيوب جانبية'
  },
  {
    id: 2,
    name: 'Jaguar Summer T-Shirt',
    arabicName: 'تيشيرت جاكوار صيفي',
    price: '350 EGP',
    image: 'https://i.imgur.com/qDuHTUN.jpg',
    category: 'T-Shirts',
    arabicCategory: 'تيشيرتات',
    color: 'Black',
    arabicColor: 'أسود',
    description: 'Black summer t-shirt with comfortable fit',
    arabicDescription: 'تيشيرت صيفي أسود بقصة مريحة'
  },
  {
    id: 3,
    name: 'Jaguar Summer T-Shirt',
    arabicName: 'تيشيرت جاكوار صيفي',
    price: '350 EGP',
    image: 'https://i.imgur.com/vm5Lqch.jpg',
    category: 'T-Shirts',
    arabicCategory: 'تيشيرتات',
    color: 'Black',
    arabicColor: 'أسود',
    description: 'Black summer t-shirt with round neck',
    arabicDescription: 'تيشيرت صيفي أسود برقبة دائرية'
  },
  {
    id: 4,
    name: 'Jaguar Light Blue Jeans',
    arabicName: 'بنطلون جينز جاكوار أزرق سماوي',
    price: '450 EGP',
    image: 'https://i.imgur.com/hHKCtY2.jpg',
    category: 'Pants',
    arabicCategory: 'بناطيل',
    color: 'Light Blue',
    arabicColor: 'أزرق سماوي',
    description: 'Light blue denim jeans with comfortable fit',
    arabicDescription: 'بنطلون جينز أزرق سماوي بقصة مريحة'
  },
  {
    id: 5,
    name: 'Jaguar Striped Shorts',
    arabicName: 'شورت جاكوار مخطط',
    price: '350 EGP',
    image: 'https://i.imgur.com/cEfN5Bk.jpg',
    category: 'Shorts',
    arabicCategory: 'شورتات',
    color: 'Black',
    arabicColor: 'أسود',
    description: 'Black striped shorts with modern design',
    arabicDescription: 'شورت أسود مخطط بتصميم عصري'
  },
  {
    id: 6,
    name: 'Jaguar Side-Striped Pants',
    arabicName: 'بنطلون جاكوار بخطوط جانبية',
    price: '400 EGP',
    image: 'https://i.imgur.com/oiq6YJv.jpg',
    category: 'Pants',
    arabicCategory: 'بناطيل',
    color: 'Black',
    arabicColor: 'أسود',
    description: 'Black pants with light side stripes',
    arabicDescription: 'بنطلون أسود بخطوط فاتحة على الجانبين'
  },
  {
    id: 7,
    name: 'Jaguar Winter Fur Jacket',
    arabicName: 'جاكيت جاكوار شتوي فرو',
    price: '1050 EGP',
    image: 'https://i.imgur.com/i9fQRqp.jpg',
    category: 'Jackets',
    arabicCategory: 'جواكت',
    color: 'Black',
    arabicColor: 'أسود',
    description: 'Black winter fur jacket',
    arabicDescription: 'جاكيت شتوي أسود بالفرو'
  },
  {
    id: 8,
    name: 'Nike Beige Shorts',
    arabicName: 'شورت نايك بيج',
    price: '350 EGP',
    image: 'https://i.imgur.com/yPNQpzd.jpg',
    category: 'Shorts',
    arabicCategory: 'شورتات',
    color: 'Beige',
    arabicColor: 'بيج',
    description: 'Nike beige sports shorts',
    arabicDescription: 'شورت نايك رياضي بيج'
  },
  {
    id: 9,
    name: 'Jaguar Beige Hoodie',
    arabicName: 'هودي جاكوار بيج',
    price: '850 EGP',
    image: 'https://i.imgur.com/ILG3KUw.jpg',
    category: 'Hoodies',
    arabicCategory: 'هوديز',
    color: 'Beige',
    arabicColor: 'بيج',
    description: 'Beige zip-up hoodie without drawstrings',
    arabicDescription: 'هودي بيج بسوسته بدون رباط'
  },
  {
    id: 10,
    name: 'Jaguar Winter Polo',
    arabicName: 'بولو جاكوار شتوي',
    price: '450 EGP',
    image: 'https://i.imgur.com/NnoVgZa.jpg',
    category: 'Polos',
    arabicCategory: 'قمصان بولو',
    color: 'Grey',
    arabicColor: 'رمادي',
    description: 'Grey winter polo shirt with zipper',
    arabicDescription: 'قميص بولو شتوي رمادي بسوسته'
  }
];

const categories = ['All', 'Jackets', 'Pants', 'Shorts', 'T-Shirts', 'Hoodies', 'Polos'];
const arabicCategories = ['الكل', 'جواكت', 'بناطيل', 'شورتات', 'تيشيرتات', 'هوديز', 'قمصان بولو'];

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const addItem = useCartStore((state) => state.addItem);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'All' || product.category === selectedCategory
  );

  const handleAddToCart = (product: Product): void => {
    const cartItem: CartItem = {
      id: product.id,
      name: i18n.dir() === 'rtl' ? product.arabicName : product.name,
      price: product.price,
      image: product.image
    };
    addItem(cartItem);
    toast.success(t('addedToCart'), {
      position: i18n.dir() === 'rtl' ? 'top-left' : 'top-right',
      style: {
        background: '#10B981',
        color: '#fff',
        borderRadius: '10px',
      },
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      {/* فئات المنتجات */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2.5 rounded-full text-sm font-medium
                transition-all duration-300 transform hover:scale-105
                ${selectedCategory === category
                  ? 'bg-emerald-500 text-white shadow-lg hover:bg-emerald-600'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-700'
                }
              `}
            >
              {i18n.dir() === 'rtl' ? arabicCategories[index] : category}
            </button>
          ))}
        </div>
      </div>

      {/* شبكة المنتجات */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`
                bg-white dark:bg-gray-800 rounded-2xl shadow-sm
                transform transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
                ${hoveredProduct === product.id ? 'scale-[1.02]' : ''}
              `}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* صورة المنتج */}
              <div className="relative overflow-hidden rounded-t-2xl group">
                <img
                  src={product.image}
                  alt={i18n.dir() === 'rtl' ? product.arabicName : product.name}
                  className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* زر إضافة إلى السلة */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`
                    absolute bottom-4 ${i18n.dir() === 'rtl' ? 'left-4' : 'right-4'}
                    bg-emerald-500 text-white p-3 rounded-full
                    transform transition-all duration-300
                    translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                    hover:bg-emerald-600 hover:scale-110
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>

              {/* تفاصيل المنتج */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {i18n.dir() === 'rtl' ? product.arabicName : product.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {i18n.dir() === 'rtl' ? product.arabicDescription : product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-500 font-bold">{product.price}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {i18n.dir() === 'rtl' ? product.arabicColor : product.color}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}