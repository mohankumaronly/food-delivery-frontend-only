import { MapPin, ChevronDown, ShoppingBag, Star } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-100 px-3 sm:px-4 py-2">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        
        {/* Left section - Offer */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          <Star size={14} className="sm:w-4 sm:h-4" style={{ color: '#FC8A06' }} />
          <span className="text-gray-700 hidden xs:inline">Get 5% Off</span>
          <span className="text-gray-700 xs:hidden">5% Off</span>
          <span className="font-semibold text-xs sm:text-sm" style={{ color: '#FC8A06' }}>
            <span className="hidden xs:inline">Promo: </span>ORDER5
          </span>
        </div>

        {/* Middle section - Location */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-1 sm:flex-none justify-center">
          <MapPin size={14} className="sm:w-4 sm:h-4" style={{ color: '#000000' }} />
          <span className="text-gray-700 hidden md:inline">Regent Street, A4, A4201, London</span>
          <span className="text-gray-700 md:hidden">Regent St, London</span>
          <button 
            className="font-medium hover:opacity-80 transition text-xs sm:text-sm whitespace-nowrap"
            style={{ color: '#FC8A06' }}
          >
            Change
          </button>
        </div>

        {/* Right section - Cart - Hidden on mobile, visible on desktop */}
        <div className="hidden sm:flex items-center">
          <div 
            className="flex items-center rounded-lg overflow-hidden text-xs sm:text-sm"
            style={{ backgroundColor: '#028643' }}
          >
            <div className="px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-2">
              <ShoppingBag size={14} className="sm:w-4 sm:h-4" color="white" />
              <span className="text-white font-semibold">
                <span className="hidden xs:inline">23 items</span>
                <span className="xs:hidden">23</span>
              </span>
            </div>
            
            <div className="w-px h-4 sm:h-5 bg-white/30"></div>
            
            <div className="px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1 sm:gap-2">
              <span className="text-white font-bold">
                <span className="hidden xs:inline">GBP </span>79.89
              </span>
              <ChevronDown size={14} className="sm:w-4 sm:h-4" color="white" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;