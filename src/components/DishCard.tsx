interface DishCardProps {
  image: string;
  categoryName: string;
  restaurantCount: number;
}

const DishCard = ({ image, categoryName, restaurantCount }: DishCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
        {/* Image Container */}
        <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden">
          <img 
            src={image} 
            alt={categoryName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Content - Below Image with smaller height */}
        <div className="p-2 sm:p-3">
          <h3 className="text-gray-900 font-semibold text-xs sm:text-sm mb-0.5 group-hover:text-[#FC8A06] transition-colors duration-300">
            {categoryName}
          </h3>
          <p className="text-gray-500 text-xs">
            {restaurantCount} Restaurants
          </p>
        </div>
      </div>
    </div>
  );
};

export default DishCard;