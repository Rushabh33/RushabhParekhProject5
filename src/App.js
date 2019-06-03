import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import './App.css';
import Header from './components/Header.js';
import SortSection from './components/SortSection.js';
import FilterSection from './components/FilterSection.js';
import ProductDisplaySection from './components/ProductDisplaySection.js';
// https://cors-anywhere.herokuapp.com//

const priceSortFunctionLowToHigh = (a, b) => {
  return parseFloat(a.price) - parseFloat(b.price)
}
const priceSortFunctionHighToLow = (a, b) => {
  return parseFloat(b.price) - parseFloat(a.price)
}
const abvSortFunctionLowToHigh = (a, b) => {
  return parseFloat(a.abv) - parseFloat(b.abv)
}
const abvSortFunctionHighToLow = (a, b) => {
  return parseFloat(b.abv) - parseFloat(a.abv)
}


const randomNumber = () => {
  return Math.floor(Math.random() * 2875) + 1; // EVENTUALLY MAKE 2875 A VARIABLE
}

class App extends Component {
  
  constructor(){
    super();
    // create an initial state
    this.state={
     products: [],
     beerDataInState: [],
     afterAPIloads: [],
     // to host the catagorized/filtered dataset in the sortSection
     sortedBeerData: []
    }
  }


  componentDidMount(){
    const url = `http://ontariobeerapi.ca/products/`
    axios({
      url:'http://proxy.hackeryou.com',
      method:'GET',
      dataResponse: 'json',
      params: {
        reqUrl: url
        },
        paramsSerializer: function (params) {
          return qs.stringify(params, {arrayFormat: 'brackets'})
        }
      }).then((response) => {

      
        this.setState({
          products: response.data,
          afterAPIloads: response.data.slice(0, 2),
          // We're creating this random thing once just so that we can create 
          beerDataInState: [response.data[randomNumber()], response.data[randomNumber()]],
        })
        // I can't put it in the first setState because it's asyncrounous...not sure the best way around it other then creating another setState
        this.setState({ 
          beerOfTheDay: this.state.beerDataInState
        })
    })
  }

  

  handleSort = (eventValue) => {
    // Get the current displayed items
    const displayedProductsArray = [...this.state.beerDataInState]
    console.log("This is the data before SORT")
    console.log(displayedProductsArray)
    console.log(eventValue)
    if (eventValue == "lowPriceFirst"){
      const sorted = [...displayedProductsArray].sort(priceSortFunctionLowToHigh)
      
      console.log(sorted)
      
      this.setState({
        beerDataInState: sorted
      })
    } 
    
    else if(eventValue == "highPriceFirst"){
      const sorted = [...displayedProductsArray].sort(priceSortFunctionHighToLow)
      
      console.log(sorted)
      
      this.setState({
        beerDataInState: sorted
      })
    }

    else if(eventValue == "lowABVFirst"){
      const sorted = [...displayedProductsArray].sort(abvSortFunctionLowToHigh)
      
      console.log(sorted)
      
      this.setState({
        beerDataInState: sorted
      })
    }

    else if(eventValue == "highABVFirst"){
      const sorted = [...displayedProductsArray].sort(abvSortFunctionHighToLow)
      
      console.log(sorted)
      
      this.setState({
        beerDataInState: sorted
      })
    }
    

  }

  handleFilter = (e) => {
    // DISPLAY -- ALL THE PRODUCTS
    if (e == "allProducts"){
      const displayAllProducts = [...this.state.products.slice(0, 10)]
      console.log(displayAllProducts)
      this.setState({
        beerDataInState: displayAllProducts
      })
    }

    // DISPLAY -- BEER OF THE DAY
    else if (e == "beerOfTheDay"){
      console.log(this.state.beerOfTheDay)
      const displayBeerOfTheDay = [...this.state.beerOfTheDay]
      // console.log(displayBeerOfTheDay)
      this.setState({
        beerDataInState: displayBeerOfTheDay
      })
    } 

    // DISPLAY -- COUNTRY SORTED BEER
    else if (e.slice(0, 2) == "00"){
      console.log(e.slice(2))
      if (e === "00Choose"){
        console.log("in the if")
        return null;
      } else {
        
        const listOfBeers = [...this.state.products]
        const countryFilter = e.slice(2)
        const countryBasedListOfBeers = [];
        for (let i = 0; i <listOfBeers.length; i++){
          if (listOfBeers[i].country.includes(countryFilter)){
            countryBasedListOfBeers.push(listOfBeers[i])
          }
        }  
        this.setState({
          beerDataInState: countryBasedListOfBeers.slice(0, 10) 
          //change after figuring out infinite scroll idea...
        })
        }
    } 
    
    // DISPLAY -- SEARCHED SORTED BEER
    else {
      console.log(e);
      const listOfBeers = [...this.state.products]
      const searchedListOfBeers = [];
      for (let i = 0; i <listOfBeers.length; i++){
        if (listOfBeers[i].name.includes(e)){
          // console.log("yes")
          searchedListOfBeers.push(listOfBeers[i])
        }
      }  
    this.setState({
      beerDataInState: searchedListOfBeers.slice(0, 10) // change after figuring out infinite scroll idea...
    })
    }
      
      

    
    
  }

  render(){
    // const productsArray = this.state.products //Immediately this is empty, untill after the state updates
    // const productsCheck = this.state.products.slice(0, 3)
    // const randomBeersDisplay = [productsArray[this.randomNumber()], productsArray[this.randomNumber()]]
    // console.log(productsCheck)
    // console.log(this.state.afterAPIloads) // should have 2 
    console.log(this.state.beerDataInState)
    // const beersData = this.state.


    return (
      <div className="App">
        <Header />
        <main>
          <div className="filterSectionCon"> {/* Potential component? */}
            <FilterSection 
            handleFilter={this.handleFilter}
            />
          </div>
          <div className="sortAndProductSectionCon">{/* Potential component? */}

            <SortSection 
            // beerDataInState={this.state.beerDataInState}
            handleSort={this.handleSort} 
            />
            
            <ProductDisplaySection
              // afterAPIloads={this.state.afterAPIloads}
              beerDataInState={this.state.beerDataInState}
              />
            {/* randomBeersDisplay={randomBeersDisplay}  */}
            {/* {this.renderProducts(randomBeersDisplay)} */}

          </div>
        </main>
      </div>
    )
  }
}

export default App;
// 