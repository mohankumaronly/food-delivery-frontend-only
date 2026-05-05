import LogoCard from './LogoCard';
import BurgerKing from '../assets/images/BurgerKing.png';
import KFCWestLondon from '../assets/images/KFCWestLondon.png';
import McDonaldLondon from '../assets/images/McDonald’sLondon.png';
import PapaJohns from '../assets/images/PapaJohns.png';
import Shaurma from '../assets/images/Shaurma.png';
import TexasChicken from '../assets/images/TexasChicken.png';

const LogoSection = () => {
  const logoRestaurants = [
    {
      id: 1,
      image: BurgerKing,
      name: "Burger King"
    },
    {
      id: 2,
      image: KFCWestLondon,
      name: "KFC"
    },
    {
      id: 3,
      image: McDonaldLondon,
      name: "McDonald's"
    },
    {
      id: 4,
      image: PapaJohns,
      name: "Papa John's"
    },
    {
      id: 5,
      image: Shaurma,
      name: "Shaurma"
    },
    {
      id: 6,
      image: TexasChicken,
      name: "Texas Chicken"
    }
  ];

  return (
    <div className="w-full bg-white mt-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {logoRestaurants.map((restaurant) => (
            <LogoCard
              key={restaurant.id}
              image={restaurant.image}
              name={restaurant.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;