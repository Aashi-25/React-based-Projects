import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import ProductListPage from "./pages/productList"
import ProductDetailsPage from "./pages/productDetails"
import CartListPage from "./pages/cartList"

function App() {


  return (
  <Fragment>
    <Routes>
      <Route path="/product-list" element={<ProductListPage />} />
      <Route path="/product-details/:id" element={<ProductDetailsPage />} /> 
      <Route path="/cart-list" element={<CartListPage />} />
    </Routes>
  </Fragment>
)}

export default App
