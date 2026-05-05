import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryNav from './components/CategoryNav'
import ExclusiveSection from './components/ExclusiveSection'
import PopularCategories from './components/PopularCategories'
import DishSection from './components/DishSection'
import PopularRestaurants from './components/PopularRestaurants'

const App = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <CategoryNav />
      <ExclusiveSection />
      <PopularCategories />
      <DishSection/>
      <PopularRestaurants/>
    </div>
  )
}

export default App