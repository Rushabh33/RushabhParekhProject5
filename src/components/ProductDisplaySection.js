import React, {Component} from 'react';
import ProductDisplayCards from './ProductDisplayCards.js';


class ProductDisplaySection extends Component {
    
    // This type of control is HEAVY blocking - then entire component is under wraps --> which is fine at this level, but not at App.js. We only want to be sending qualified-postAPI data to the next level
    renderProducts = (apiCheck, beerData) => {
        if (apiCheck.length) {
          return (
            <>
                {console.log(beerData)}
                {console.log("line13")}
                {/* <ProductDisplayCards  /> */}
                {/* randomBeersDisplay={randomBeersDisplay} */}
            </>
          )
        }
      }      
    
    // componentDidMount(){
    //     if (this.props.apiCheck){
    //         this.props.beerOfTheDayTrigger()
    //     }
    // }
    render() {
        const {beerDataInState, afterAPIloads, beerOfTheDayTrigger} = this.props
        beerOfTheDayTrigger()
        // console.log(beerOfTheDayTrigger)
        console.log(beerDataInState)
        
        return (
            <section className="productDisplaySection">
                <div className="productDisplayCon wrapper">
                    {this.renderProducts(afterAPIloads, beerDataInState)}     
                </div>
            </section>
        )
    }  

}

export default ProductDisplaySection;  

// {/* {randomBeersDisplay[0] ? <ProductDisplayCards randomBeersDisplay={randomBeersDisplay} /> : null} */}