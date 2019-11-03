import React, { Component } from 'react';
import highlightedProductsList from '../../highlightedProducts'
import HighlightedProducts from './HighlightedProducts';
import OtherProducts from './OtherProducts';

class ProductSection extends Component {
  constructor() {
    super()
    this.state = {
      productData: []
    }
  } ƒ

  organizeAndRenderProducts = (productsToDisplay, displaySortedProducts) => {
    if (!displaySortedProducts) {
      const otherProductsData = productsToDisplay.filter((productInfo) => !(highlightedProductsList.includes(productInfo.product_id)))
      const unsortedHiglightedProducts = productsToDisplay.filter((productInfo) => highlightedProductsList.includes(productInfo.product_id))
      const highlightedProductsData = this.sortPrimaryHighlitedProduct(unsortedHiglightedProducts)
      return this.renderProducts(otherProductsData, displaySortedProducts, highlightedProductsData)
    }
    else if (displaySortedProducts) {
      return this.renderProducts(productsToDisplay, displaySortedProducts)
    }
  }

  sortPrimaryHighlitedProduct = (arr) => {
    let primaryProducts = [];
    let secondaryProducts = arr.filter(item => {
      if (item.product_id === highlightedProductsList[0]) {
        primaryProducts.push(item)
        return false
      }
      return true
    })
    return [...primaryProducts, ...secondaryProducts]
  }

  renderProducts = (otherProductsData, displaySortedProducts, highlightedProductsData) => {
    return (
      <div className="productDisplayContainer wrapper">
        {!displaySortedProducts && <HighlightedProducts highlightedProductsData={highlightedProductsData} />}
        <OtherProducts otherProductsData={otherProductsData} />
      </div>
    )
  }


  render() {
    const { displaySortedProducts, productsToDisplay } = this.props;
    return (
      <>
        {productsToDisplay.length
          ? this.organizeAndRenderProducts(productsToDisplay, displaySortedProducts)
          : <div><h1>loading...</h1></div>}
      </>
    )

  }
}

export default ProductSection;


