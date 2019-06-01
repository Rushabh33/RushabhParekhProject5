import React from 'react';
import ProductDisplayCards from './ProductDisplayCards.js';

const ProductDisplaySection = ({beerOfTheDay}) => {
    return (
        <section className="productDisplaySection">
            <div className="productDisplayCon wrapper">
                <ProductDisplayCards beerOfTheDay={beerOfTheDay} />
            </div>
        </section>
    )
}


export default ProductDisplaySection; 