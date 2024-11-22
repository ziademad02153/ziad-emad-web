import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export default function Cart() {
  const { items, isCartOpen, toggleCart, removeItem, updateQuantity } = useCartStore();

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(' ج.م', ''));
    return sum + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    // Here you would integrate with your payment gateway
    // For example, redirect to WhatsApp with order details
    const orderDetails = items
      .map((item) => `${item.name} (${item.quantity}x)`)
      .join('\n');
    const message = `طلب جديد:\n${orderDetails}\nالإجمالي: ${total} ج.م`;
    window.open(
      `https://wa.me/201001375582?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute left-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-6 transform transition-transform">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center">
            <ShoppingBag className="mr-2" /> سلة التسوق
          </h2>
          <button
            onClick={toggleCart}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">سلة التسوق فارغة</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-4 border-b"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">الإجمالي:</span>
                <span className="font-bold">{total} ج.م</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                إتمام الطلب عبر واتساب
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}