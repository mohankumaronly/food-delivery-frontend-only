interface LogoCardProps {
  image: string;
  name: string;
}

const LogoCard = ({ image, name }: LogoCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
        {/* Image Container */}
        <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden bg-gray-50">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Content - Below Image */}
        <div className="p-2 sm:p-3 text-center" style={{ backgroundColor: '#FC8A06' }}>
          <h3 className="text-white font-semibold text-xs sm:text-sm">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LogoCard;