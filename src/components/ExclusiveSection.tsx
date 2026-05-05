import ExclusiveCard from './ExclusiveCard';
import placeholderImage from '../assets/images/placeholder-image.png';

const ExclusiveSection = () => {
  const exclusiveDeals = [
    {
      id: 1,
      image: placeholderImage,
      restaurantName: "Chef Burgers",
      restaurantAddress: "London",
      discount: 40
    },
    {
      id: 2,
      image: placeholderImage,
      restaurantName: "Sushi Master",
      restaurantAddress: "Manchester",
      discount: 30
    },
    {
      id: 3,
      image: placeholderImage,
      restaurantName: "Pizza Heaven",
      restaurantAddress: "Birmingham",
      discount: 25
    }
  ];

  return (
    <div className="w-full bg-white mt-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Exclusive Deals</h2>
          <p className="text-gray-500 mt-1">Special offers just for you</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exclusiveDeals.map((deal) => (
            <ExclusiveCard
              key={deal.id}
              image={deal.image}
              restaurantName={deal.restaurantName}
              restaurantAddress={deal.restaurantAddress}
              discount={deal.discount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveSection;