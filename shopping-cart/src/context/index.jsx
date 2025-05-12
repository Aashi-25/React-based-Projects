//create the context
//provide the state to context 
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider ( {children} ){

    const [loading , setLoading] = useState(false);
    const [listOfProducts , setListOfProducts] = useState([]);

    async function fetchListOfProducts(){
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();
        
        console.log(result);

        if (result && result?.products) {
            setListOfProducts(result?.products);
        }
    }

    useEffect(() => {
        fetchListOfProducts() ;
    } , [])

    console.log(listOfProducts);

    return (
        <ShoppingCartContext.Provider value = {{listOfProducts}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;