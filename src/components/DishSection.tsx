import DishCard from './DishCard';
import placeholderImage2 from '../assets/images/placeholder-image2.png';

const DishSection = () => {
  const dishCategories = [
    {
      id: 1,
      image: placeholderImage2,
      categoryName: "Burgers & Fast food",
      restaurantCount: 21
    },
    {
      id: 2,
      image: placeholderImage2,
      categoryName: "Pizza & Pasta",
      restaurantCount: 18
    },
    {
      id: 3,
      image: placeholderImage2,
      categoryName: "Sushi & Japanese",
      restaurantCount: 15
    },
    {
      id: 4,
      image: placeholderImage2,
      categoryName: "Indian Cuisine",
      restaurantCount: 24
    }
  ];

  return (
    <div className="w-full bg-white mt-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {dishCategories.map((category) => (
            <DishCard
              key={category.id}
              image={category.image}
              categoryName={category.categoryName}
              restaurantCount={category.restaurantCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DishSection;