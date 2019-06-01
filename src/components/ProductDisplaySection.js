import React, {Component} from 'react';
import ProductDisplayCards from './ProductDisplayCards.js';


class ProductDisplaySection extends Component {
    
    componentDidMount(){}
    
    
    renderProducts = (randomBeersDisplay) => {
        if (randomBeersDisplay[0]) {
          return (
            <>
                <ProductDisplayCards randomBeersDisplay={randomBeersDisplay} />
           </>
          )
        }
      }      
    
    render() {
        const {randomBeersDisplay} = this.props
        
        console.log(randomBeersDisplay)
        return (
            <section className="productDisplaySection">
                <div className="productDisplayCon wrapper">
                    {this.renderProducts(randomBeersDisplay)}
                   
                </div>
            </section>
        )

    }  

}

export default ProductDisplaySection;  

// {/* {randomBeersDisplay[0] ? <ProductDisplayCards randomBeersDisplay={randomBeersDisplay} /> : null} */}