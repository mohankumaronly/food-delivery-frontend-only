const PopularRestaurants = () => {
  return (
    <div className="w-full bg-white mt-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            <span style={{ color: '#FC8A06' }}>Popular</span> Restaurants
          </h2>
          <p className="text-gray-500 mt-2">Discover the most loved restaurants near you</p>
        </div>
      </div>
    </div>
  );
};

export default PopularRestaurants;