import React from 'react';



const addDefaultSrc = (e) => {
        e.target.src = 'https://media.giphy.com/media/uprwwjptZW4Za/giphy.gif'
    }

const ProductDisplayCards = ({beerDataInState}) => {
    // remember to check if matbe this condition is all I need

    
const beerCards = beerDataInState.length ? (
    beerDataInState.map(beer => {
        return(
            <div className="productDisplayCardsCon" key={beer.product_id} tabIndex="0">
                <div className="productDisplayImg">
                    <img className="productImg" src={beer.image_url} onError={addDefaultSrc} alt={beer.name}/>
                </div>
                
                <div className="productDisplayInfo">
                    <h4 className="productTitle">{beer.name}</h4>
                    <ul className="productDescription">
                        <li>country: {beer.country}</li>
                        <li>abv: {beer.abv}</li>
                        <li>price: ${beer.price}</li>
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