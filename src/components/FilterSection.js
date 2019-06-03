import React, {Component} from 'react';

class FilterSection extends Component {
    //make the props into variables frist - forgot...I don't want to put it under render
    state = {
        content: ' '
    }
    
    handleOnChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleFilter(this.state.content)
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
                    {/* <button>Filter Choices</button> */}
                    <h3>filter</h3>
                    <button value="allProducts" onClick={this.handleAllProductsClick}>All Products</button>
                    <button value="beerOfTheDay" onClick={this.handleAllProductsClick}>Beers Of The Day</button>
                    <form action="" onSubmit={this.handleSubmit}>
                        <label htmlFor="search"></label>
                        <input type="text" id="search" onChange={this.handleOnChange}/>
                    </form>
                </div>
            </section>
        )
    }
}


export default FilterSection;