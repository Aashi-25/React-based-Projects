import React, { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../context';
import { list } from 'postcss';
import ProductTitle from '../../components/productTitle';
import Loader from '../../components/loader';

function ProductListPage() {

  const {listOfProducts} = useContext(ShoppingCartContext);

  const[loading , setLoading] = useState(true);

  console.log(listOfProducts);

  // useEffect(() => {
  //   if (listOfProducts) {
  //     setLoading(false);
  //   }
  // } , [listOfProducts]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    } , 1500);

    return () => clearTimeout(timer);
  } , []);

  if(loading) return <Loader/>;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-[10rem] lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-extradark text-gray-950 sm:text-4xl font-serif font-bold">
            Our Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4 ">
          {listOfProducts && listOfProducts.length > 0 ? (
            listOfProducts.map((singleProductTitle) => (
              <ProductTitle 
              key = {singleProductTitle.id}
              singleProductTitle = {singleProductTitle} />
            ))
          ) : (
            <h3>No Products Found</h3>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductListPage ;