import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllListings from './pages/AllListings'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import Search from './pages/Search'
import Login from './pages/Login'
import Register from './pages/Register'
import Control from './pages/Control'
import CreateProduct from './pages/CreateProduct'
import Orders from './pages/Orders'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<AllListings />} />
        <Route path='/all/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/control' element={<Control />} />
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/control/orders' element={<Orders />} />
      </Routes>
    </div>
  )
}

export default App