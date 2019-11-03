import React from 'react';
import PlaceHolderImage from '../assets/placeHolderImage.svg'
import { addDefaultSrc } from '../utilityFunctions'

const ProductCard = ({ productInfo, lessDisplayed }) => {
  return (
    <li className={'productListItem ' + lessDisplayed}>
      <div className="productImageContainer" key={productInfo.product_id}>
        <img onError={(e) => addDefaultSrc(e, PlaceHolderImage)} src={productInfo.image_url} alt={productInfo.name + ' picture'} className="primaryProductImage" />
      </div>
      <div className="productInfoContainer">
        <div className="basicProductInfo">
          <h2>{productInfo.name}</h2>
          <p className='productBrewer'>{productInfo.brewer}</p>
        </div>
        <div className="detailedProductInfo">
          <div className="typeAndPriceProductInfo">
            <p className='productType'>{productInfo.type}</p>
            <p>$<span className='productPrice'>{productInfo.price}</span></p>
          </div>
          <div className="sizeAndABVProductInfo">
            <p className='productSize'>{productInfo.size}</p>
            <p className='productABV'>{productInfo.abv}% ABV</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProductCard