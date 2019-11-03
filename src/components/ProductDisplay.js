import React, { Component } from 'react';
import ProductCard from './ProductCard';


class ProductDisplay extends Component {

  listOfDisplayedProducts = (data) => {
    return data.map(item =>
      <ProductCard
        productInfo={item}
        lessDisplayed={data.length === 2 ? 'lessDisplayed'
          : data.length === 1 ? 'lessDisplayed less'
            : null} />)
  }

  render() {
    const { displayedData } = this.props
    return (
      <ul id='productList' className='productList onlyDisplayproductList'>
        {this.listOfDisplayedProducts(displayedData)}
      </ul>
    )
  }
}

export default ProductDisplay