import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllListings from './pages/AllListings'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import MenCollection from './pages/MenCollection'
import WomenCollection from './pages/WomenCollection'
import KidsCollection from './pages/KidsCollection'
import NewAndFeatured from './pages/NewAndFeatured'
import Search from './pages/Search'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<AllListings />} />
        <Route path='/all/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search' element={<Search />} />

        <Route path='/men' element={<MenCollection />} />
        <Route path='/women' element={<WomenCollection />} />
        <Route path='/kids' element={<KidsCollection />} />
        <Route path='/new-featuring' element={<NewAndFeatured />} />
      </Routes>
    </div>
  )
}

export default App