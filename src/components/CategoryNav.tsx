import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

const CategoryNav = () => {
  const [activeCategory, setActiveCategory] = useState('vegan');

  const categories = [
    { id: 'vegan', label: 'Vegan' },
    { id: 'sushi', label: 'Sushi' },
    { id: 'pizza', label: 'Pizza & Fast food' },
    { id: 'others', label: 'Others' },
  ];

  return (
    <div className="w-full bg-white mt-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
          
          {/* Left side - Deal Text - No background */}
          <div className="flex items-center gap-2 px-4 py-2">
            <Tag size={18} style={{ color: '#FC8A06' }} />
            <span className="text-gray-800 font-bold">
              Up to <span style={{ color: '#FC8A06' }}>-40%</span> 🎊
            </span>
            <span className="text-gray-600 font-medium">Order.uk exclusive deals</span>
          </div>

          {/* Right side - Category Navigation */}
          {/* Desktop: Show all categories */}
          <div className="hidden sm:flex items-center gap-2 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="relative px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-full"
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-full"
                    style={{ border: '2px solid #FC8A06', backgroundColor: 'transparent' }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span
                  className="relative z-10 transition-colors duration-200"
                  style={{
                    color: activeCategory === category.id ? '#FC8A06' : '#4B5563'
                  }}
                >
                  {category.label}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile: Show only View More button */}
          <div className="sm:hidden">
            <button
              className="px-5 py-2 text-sm font-medium rounded-full"
              style={{ border: '2px solid #FC8A06', color: '#FC8A06' }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;