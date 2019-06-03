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
                    <div className="topHalfFilters">
                        <h4 className="filterTitle">filter</h4>
                        
                        <button value="allProducts" onClick={this.handleAllProductsClick}>All Products</button>
                        
                        <button value="beerOfTheDay" onClick={this.handleAllProductsClick}>Beers Of The Day</button>
                        
                        <form action="" onSubmit={this.handleSearchSubmit}>
                            <label htmlFor="search"></label>
                            <input type="text" id="search" placeholder="search name" onChange={this.handleSearchOnChange}/>
                        </form>
                    </div>
                    <div className="botHalfFilters">
                        <h4>country</h4>
                        <form className="countryFilterMobile"onSubmit={this.handleSelectSubmit} >
                            <label className="countryLabel" htmlFor="country"></label>
                            <select value={this.state.countryValue} onChange={this.handleSelectOnChange} id="country" placeholder="country">
                                <option value="00Choose">Choose Country</option>
                                <option value="00Germany">Germany</option>
                                <option value="00Canada">Canada</option>
                                <option value="00Denmark">Denmark</option>
                                <option value="00France">France</option>
                            </select>
                            <button>submit</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}


export default FilterSection;