import React, {Component} from 'react';

class SortSection extends Component {
    
    //create a state that is updated based on the onchange value
    //create a button with onSubmit
    // 
    state = {
        sortValue: '',
        isHighFirstChecked: false,
        isLowFirstChecked: false
    }

    handleOnChangeSortLow = (e) => {
        console.log(e.target.value)
        this.setState({
            sortValue: e.target.value,
            isLowFirstChecked: true
        })
    }
    
    handleOnChangeSortHigh = (e) => {
        console.log(e.target.value)
        this.setState({
            sortValue: e.target.value,
            isHighFirstChecked: true
        })
    }
    
    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.handleSort(this.state.sortValue)
        this.setState({
            isHighFirstChecked: false,
            isLowFirstChecked: false
        })
    }


    render(){
       return (
        <section className="sortSection"> 
            
            <div className="sortCon">  
                <div className="singleInput">
                    <h3 className="sortTitle">sort |</h3>
                </div>
                <form action="" onSubmit={this.handleOnSubmit}>
                    <div className="singleInput">
                        <label htmlFor="sortByPriceLow">Price: Low->High</label>
                        <input type="radio" id="sortByPriceLow" name="sort" value="lowPriceFirst" checked={this.state.isLowFirstChecked} onChange={this.handleOnChangeSortLow}/>
                    </div>
                    <div className="singleInput">
                        <label htmlFor="sortByPriceHigh">Price: High->Low</label>   
                        <input type="radio" id="sortByPriceHigh" name="sort" value="highPriceFirst" checked={this.state.isHighFirstChecked} onChange={this.handleOnChangeSortHigh}/>
                    </div>
                    <div className="singleInput">  
                        <label htmlFor="sortByABVLow">ABV: Low->High</label>
                        <input type="radio" id="sortByABVLow" name="sort" value="lowABVFirst" checked={this.state.isLowFirstChecked} onChange={this.handleOnChangeSortLow}/>
                    </div>
                    <div className="singleInput">  
                        <label htmlFor="sortByABVHigh">ABV: High->Low</label>   
                        <input type="radio" id="sortByABVHigh" name="sort" value="highABVFirst" checked={this.state.isHighFirstChecked} onChange={this.handleOnChangeSortHigh}/>
                    </div>
                    
                    <button className="sortButton">Sort</button>
                </form>
            </div>
        </section>
    ) 
    }

}


export default SortSection;