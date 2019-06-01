import React from 'react';

const ProductDisplayCards = ({beerOfTheDay}) => {
    
    // componentDidMount(){
    //     this.props.beerOfTheDayFunc()
    // }

        // console.log(this.props.beerOfTheDay[0].image_url)
        // const firstBeerArray = firstBeer[0]
       if (beerOfTheDay) {
           console.log(beerOfTheDay)
           return (
               <div className="productDisplayCardsCon">
                   <div className="productDisplayImg">
                       <img className="productImg" src="" alt={beerOfTheDay[0].name}/>
                   </div>
                   <div className="productDisplayInfo">
                       <p className="productDescription"></p>
                   </div>
               </div>
           )

       }
    }  


export default ProductDisplayCards;