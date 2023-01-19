import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './containers/Header/Header'
import ProductListing from './containers/Product/ProductListing'
import ProductDetailt from './containers/ProductDetails/ProductDetailt'


const App = () => {
  return (
    <div>
   <Header/>
   <Router>
    <Routes>
      <Route path='/' element={<ProductListing/>}/>
      <Route path="/product/:productId"  element={<ProductDetailt/>}/>
      <Route>404 note fount</Route>
    </Routes>
   </Router>
    </div>
  )
}

export default App