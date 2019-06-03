import React, {Component} from 'react';

class SortSection extends Component {
    render(){
    const {beerDataInState, handleSortByPrice} = this.props
       return (
        <section className="sortSection">
            <div className="sortCon wrapper">
                {/* <button>sort Choices</button> */}
                <h3 className="sortTitle">sort</h3>
                <form action="">
                    {/* <label for="pet-select">Choose a pet:</label>
                    <select id="pet-select">
                        <option value="">--Please choose an option--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select> */}

                    {/* <label htmlFor="sortByPrice">Price: Low->High</label>
                    <input type="radio" id="sortByPrice" name="highLow" value="lowFirst" onChange={handleSortByPrice}/>
                    <label htmlFor="sortByPrice">Price: High->Low</label>
                    <input type="radio" id="sortByPrice" name="highLow" value="highFirst" onChange={handleSortByPrice}/> */}
                </form>
            </div>
        </section>
    ) 
    }

}


export default SortSection;