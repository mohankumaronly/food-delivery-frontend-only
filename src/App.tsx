import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryNav from './components/CategoryNav'
import ExclusiveSection from './components/ExclusiveSection'
import PopularCategories from './components/PopularCategories'
import DishSection from './components/DishSection'
import PopularRestaurants from './components/PopularRestaurants'
import LogoSection from './components/LogoSection'
import Banner from './components/Banner'
import BusinessCards from './components/BusinessCards'
import InfoSection from './components/InfoSection'
import Stats from './components/Stats'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <CategoryNav />
      <ExclusiveSection />
      <PopularCategories />
      <DishSection />
      <PopularRestaurants />
      <LogoSection />
      <Banner />
      <BusinessCards />
      <InfoSection />
      <Stats />
    </div>
  )
}

export default App