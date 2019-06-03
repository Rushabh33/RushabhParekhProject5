import React, {Component} from 'react';

class FilterSection extends Component {
    //make the props into variables frist - forgot...I don't want to put it under render
    state = {
        content: ' ',
        countryValue: "00Choose"
    }
    
    handleSearchOnChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.props.handleFilter(this.state.content)
    }

    handleSelectOnChange = (e) => {
        this.setState({
            countryValue: e.target.value
        })
    }

    handleSelectSubmit = (e) => {
        e.preventDefault();
        console.log("country choosesr")
        console.log(this.state.countryValue)
        this.props.handleFilter(this.state.countryValue)
    }

    handleAllProductsClick = (e) =>{
        this.props.handleFilter(e.target.value)
        console.log(e.target.value)
        console.log(this.props.handleFilter)
    }



    render(){
        return (
            <section className="filterSection">
                <div className="filterCon wrapper">
                    <h3 className="filterTitle">filter</h3>
                    
                    <button value="allProducts" onClick={this.handleAllProductsClick}>All Products</button>
                    
                    <button value="beerOfTheDay" onClick={this.handleAllProductsClick}>Beers Of The Day</button>
                    
                    <form action="" onSubmit={this.handleSearchSubmit}>
                        <label htmlFor="search"></label>
                        <input type="text" id="search" placeholder="name of brand" onChange={this.handleSearchOnChange}/>
                    </form>
                    
                    <form onSubmit={this.handleSelectSubmit} >
                        <label className="countryLabel" htmlFor="country">country</label>
                        <select value={this.state.countryValue} onChange={this.handleSelectOnChange} id="country" placeholder="country">
                            <option value="00Choose">Choose Country</option>
                            <option value="00Germany">Germany</option>
                            <option value="00Canada">Canada</option>
                            <option value="00Denmark">Denmark</option>
                            <option value="00France">France</option>
                        </select>
                        <input type="submit" value="Submit"/>
                    </form>



                </div>
            </section>
        )
    }
}


export default FilterSection;