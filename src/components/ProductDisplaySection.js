import React, {Component} from 'react';
import ProductDisplayCards from './ProductDisplayCards.js';


class ProductDisplaySection extends Component {
    render() {
        const {beerOfTheDay} = this.props
        return (
            <section className="productDisplaySection">
                <div className="productDisplayCon wrapper">
                    {beerOfTheDay[0] ? <ProductDisplayCards beerOfTheDay={beerOfTheDay} /> : null}
                </div>
            </section>
        )

    }

}

export default ProductDisplaySection; 