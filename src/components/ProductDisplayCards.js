import React from 'react';


// const beersDisplayArry = flavour.map((flavourItem, index) => {
//     return(
//         <div className="productDisplayCardsCon">
//             <div className="productDisplayImg">
//                 <img className="productImg" src="" alt={randomBeersDisplay[0].name}/>
//             </div>
//             <div className="productDisplayInfo">
//                 <p className="productDescription"></p>
//             </div>
//         </div>



//       <div key={index} id={index}> 
//         <h3>Today's donuts is {flavourItem}</h3>
//          <button onClick={() => {deleteFlavour(index)} }>destroy me</button>   {/*Button to delete flavour...but the flavour exists in APP.js.......so we need to reference a function existing in App.js  */}
//       </div>
//     )
//   })  

const ProductDisplayCards = ({beerDataInState}) => {
    // remember to check if matbe this condition is all I need
    const beerCards = beerDataInState.length ? (
        beerDataInState.map(beer => {
            return(
                <div className="productDisplayCardsCon" key={beer.product_id}>
                    <div className="productDisplayImg">
                        <img className="productImg" src={beer.image_url} alt={beer.name}/>
                    </div>
                    
                    <div className="productDisplayInfo">
                        <h4 className="productTitle">{beer.name}</h4>
                        <ul className="productDescription">
                            <li>country: {beer.country}</li>
                            <li>abv: {beer.abv}</li>
                            <li>price: {beer.price}</li>
                        </ul>
                    </div>
                </div>
            )    
        })): (<h4>Loading, please wait!</h4>)  
           return (
               <>
                  {beerCards}
               </>
           )
    }  


export default ProductDisplayCards;