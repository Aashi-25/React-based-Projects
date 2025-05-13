import React, { Fragment, useContext } from 'react'
import { ShoppingCartContext } from '../../context';

function CartTile({ singleCartItem }) {

    const {handleRemoveFromCart , handleAddtoCart} = useContext(ShoppingCartContext) ;
  return (
    <Fragment>
        
    <div className='grid grid-cols-3 item-start gap-5'>
        <div className='col-span-2 flex items-start gap-4'>
            <div className='w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm'>
                <img
                src= {singleCartItem?.thumbnail}
                className='w-full h-full object-contain'
                />
            </div>
            <div>
                <h3 className='text-base font-bold text-gray-900'>
                    {singleCartItem?.title}
                </h3>
                <button 
                onClick={ () => handleRemoveFromCart(singleCartItem , true)}
                className='text-sm px-4 py-3 bg-black text-white font-extrabold mt-2' >REMOVE</button>
            </div>
        </div>
        <div className='ml-auto'>
            <h3 className='text-lg font-bold text-gray-900'>${singleCartItem?.totalPrice.toFixed(2)}</h3>
            <p className='mt-2 mb-3 font-bold text-[16px]'>Quantity:-{singleCartItem?.quantity}</p>
            <div className='mt-3'>
                <button
                onClick={ () => handleRemoveFromCart(singleCartItem , false)}
                className='w-10 h-10 border border-black text-lg font-bold rounded disabled:opacity-50' disabled = {singleCartItem?.quantity === 1}>-</button>
                <button 
                onClick={ () => handleAddtoCart(singleCartItem)}
                className='w-10 h-10 border border-black text-lg font-bold rounded ml-2'>+</button>
            </div>
        </div>
    </div>
    <hr className='border-gray-500'/>
    </Fragment>
  )
}

export default CartTile;