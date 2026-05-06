import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Menu, X } from 'lucide-react';
import Logo from '../assets/images/LOGO.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'browse', label: 'Browse Menu' },
    { id: 'offers', label: 'Special Offers' },
    { id: 'track', label: 'Track Order' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src={Logo}
              alt="Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="relative px-4 py-2 text-sm font-medium"
              >
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg"
                    style={{ backgroundColor: '#FC8A06' }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span
                  className="relative z-10 transition-colors duration-200"
                  style={{
                    color: activeTab === item.id ? '#FFFFFF' : '#4B5563'
                  }}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Login/Signup Button - Desktop */}
          <div className="hidden md:flex items-center">
            <button 
              className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all hover:scale-105"
              style={{ backgroundColor: '#03081F', color: '#FFFFFF' }}
            >
              <div 
                className="rounded-full p-1.5"
                style={{ backgroundColor: '#FC8A06' }}
              >
                <User size={16} color="#03081F" />
              </div>
              <span>Login / Signup</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: '#03081F' }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-colors"
                  style={{
                    color: activeTab === item.id ? '#FFFFFF' : '#4B5563',
                    backgroundColor: activeTab === item.id ? '#03081F' : 'transparent'
                  }}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Login/Signup Button - Mobile */}
              <button 
                className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg font-medium mt-4"
                style={{ backgroundColor: '#03081F', color: '#FFFFFF' }}
              >
                <div 
                  className="rounded-full p-1.5"
                  style={{ backgroundColor: '#FC8A06' }}
                >
                  <User size={16} color="#03081F" />
                </div>
                <span>Login / Signup</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;