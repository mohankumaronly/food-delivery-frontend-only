import exclusiveImage1 from '../assets/images/exclusiveImage1.png';
import exclusiveImage2 from '../assets/images/exclusiveImage2.png';

const BusinessCards = () => {
  return (
    <div className="w-full bg-white mt-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 - Earn more with lower fees */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <img 
              src={exclusiveImage1} 
              alt="Earn more with lower fees"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Earn more with lower fees</h3>
              <button 
                className="mt-4 px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 w-fit"
                style={{ backgroundColor: '#FC8A06', color: '#FFFFFF' }}
              >
                Learn More →
              </button>
            </div>
          </div>

          {/* Card 2 - Signup as a business */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
            <img 
              src={exclusiveImage2} 
              alt="Signup as a business"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Signup as a business</h3>
              <p className="text-white/90 text-sm mb-2">Partner with us</p>
              <button 
                className="mt-2 px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 w-fit"
                style={{ backgroundColor: '#FC8A06', color: '#FFFFFF' }}
              >
                Get Started
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessCards;