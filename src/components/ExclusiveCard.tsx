interface ExclusiveCardProps {
  image: string;
  restaurantName: string;
  restaurantAddress: string;
  discount: number;
}

const ExclusiveCard = ({ image, restaurantName, restaurantAddress, discount }: ExclusiveCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img 
          src={image} 
          alt={restaurantName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Enhanced Gradient Overlay for fancy look */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03081F]/90 via-[#03081F]/40 via-[#FC8A06]/15 to-transparent"></div>
        
        {/* Second gradient layer for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FC8A06]/10 to-transparent"></div>
        
        {/* Discount Badge - Top Right with rounded bottom */}
        <div 
          className="absolute top-0 right-4 px-4 py-2 font-bold text-sm rounded-b-lg backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(3, 8, 31, 0.9)', color: '#FFFFFF', borderLeft: '1px solid rgba(252, 138, 6, 0.3)', borderRight: '1px solid rgba(252, 138, 6, 0.3)' }}
        >
          -{discount}%
        </div>
      </div>
      
      {/* Content - Bottom Left with better gradient */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#FC8A06] transition-colors duration-300">{restaurantName}</h3>
        <p className="text-white/80 text-sm group-hover:text-white/100 transition-colors duration-300">{restaurantAddress}</p>
      </div>
    </div>
  );
};

export default ExclusiveCard;