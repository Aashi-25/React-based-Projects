//create the context
//provide the state to context 
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);
    const [cartItem, setCartItem] = useState([]);
    const navigate = useNavigate();

    async function fetchListOfProducts() {
        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();

        console.log(result);

        if (result && result?.products) {
            setListOfProducts(result?.products);
            setLoading(false);
        }
    }

    function handleAddtoCart(getProductDetails) {
        console.log(getProductDetails);

        let cpyExistingCartItems = [...cartItem];
        const findIndexOfCurrentItem = cpyExistingCartItems.findIndex((cartItem) => cartItem.id === getProductDetails.id);


        console.log(findIndexOfCurrentItem);

        if (findIndexOfCurrentItem === -1) {
            cpyExistingCartItems.push({
                ...getProductDetails,
                quantity: 1,
                totalPrice: getProductDetails?.price,
            });
        } else {
            console.log("its coming here");
            cpyExistingCartItems[findIndexOfCurrentItem] = {
                ...cpyExistingCartItems[findIndexOfCurrentItem],
                quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
                totalPrice: (cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1 )* cpyExistingCartItems[findIndexOfCurrentItem].price
            }
        }
        console.log(cpyExistingCartItems, "cpyExistingCartItems");
        setCartItem(cpyExistingCartItems);
        localStorage.setItem('cartItems', JSON.stringify(cpyExistingCartItems));
        navigate('/cart-list');
    };

    useEffect(() => {
        fetchListOfProducts();
        const storedCartItems = localStorage.getItem('cartItems');
        setCartItem(storedCartItems ? JSON.parse(storedCartItems) : []);
    }, []);
    console.log(cartItem);

    function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
        let cpyExistingCartItems = [...cartItem];
        const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(item => item.id === getProductDetails.id);

        if (isFullyRemoveFromCart) {
            cpyExistingCartItems.splice(findIndexOfCurrentItem, 1)
        } else {
            cpyExistingCartItems[findIndexOfCurrentItem] = {
                ...cpyExistingCartItems[findIndexOfCurrentItem], quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity - 1, totalPrice: (cpyExistingCartItems[findIndexOfCurrentItem].quantity - 1) * cpyExistingCartItems[findIndexOfCurrentItem].price
            }
        }
        localStorage.setItem('cartItem', JSON.stringify(cpyExistingCartItems));
        setCartItem(cpyExistingCartItems);
    }
    return (
        <ShoppingCartContext.Provider value={{ listOfProducts, loading, setLoading, productDetails, setProductDetails, handleAddtoCart, cartItem, handleRemoveFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartProvider;