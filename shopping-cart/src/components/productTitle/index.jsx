import React from 'react'

function ProductTitle( {singleProductTitle} ) {
  return (
    <div className="text-sm font-medium text-gray-900">
      <h3 className="font-semibold">{singleProductTitle.title}</h3>
      <p className="text-gray-500">Price: ${singleProductTitle.price}</p>
    </div>
  )
}

export default ProductTitle