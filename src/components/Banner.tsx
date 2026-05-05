import orderingBanner from '../assets/images/ordering_banner.png';

const Banner = () => {
  return (
    <div className="w-full bg-white mt-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={orderingBanner} 
            alt="Ordering Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;