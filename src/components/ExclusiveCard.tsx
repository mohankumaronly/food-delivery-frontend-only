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
        
        {/* Discount Badge - Top Right */}
        <div 
          className="absolute top-3 right-3 px-3 py-1 rounded-full font-bold text-sm"
          style={{ backgroundColor: '#FC8A06', color: '#FFFFFF' }}
        >
          -{discount}%
        </div>
      </div>
      
      {/* Content - Bottom Left */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white font-bold text-lg mb-1">{restaurantName}</h3>
        <p className="text-white/80 text-sm">{restaurantAddress}</p>
      </div>
    </div>
  );
};

export default ExclusiveCard;