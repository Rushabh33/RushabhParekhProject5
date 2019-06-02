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

class App extends Component {
  
  constructor(){
    super();
    // create an initial state
    this.state={
     products: [],
     beerDataInState: [],
     afterAPIloads: []
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


        this.randomNumber = () => {
          return Math.floor(Math.random() * 2875) + 1; // EVENTUALLY MAKE 2875 A VARIABLE
        }
      
        this.setState({
          products: response.data,
          afterAPIloads: response.data.slice(0, 2),
          beerDataInState: [response.data[this.randomNumber()], response.data[this.randomNumber()]],
          beerOfTheDay: this.state.beerDataInState
        })
    })
  }

  
  randomNumber = () => {
    return Math.floor(Math.random() * 2875) + 1; // EVENTUALLY MAKE 2875 A VARIABLE
  }

  
  // beerOfTheDayTrigger = () => {
  //   const productsArray = this.state.products
  //   const beerDataInState = this.state.beerDataInState
  //               console.log("beer of the day FUNCTION")
  //               console.log(productsArray)
  //   if (productsArray.length && beerDataInState == false ) {

  //     const beersOfTheDayData = [productsArray[this.randomNumber()], productsArray[this.randomNumber()]]
  //               console.log("beer of the day FUNCTION - hopefuly after the api called")
  //               console.log(beersOfTheDayData)
  //     this.setState({
  //       beerDataInState: beersOfTheDayData
  //     })
  //   } 
  // }
  

  handleSortByPrice = (event) => {
    // Get the current displayed items
    const displayedProductsArray = [...this.state.beerDataInState]
    console.log("This is the data before SORT")
    console.log(displayedProductsArray)

    if (event.target.value == "lowFirst"){
      const sorted = [...displayedProductsArray].sort(priceSortFunctionLowToHigh)
      console.log(sorted)
      this.setState({
        beerDataInState: sorted
      })
    } else if(event.target.value == "highFirst"){
      const sorted = [...displayedProductsArray].sort(priceSortFunctionHighToLow)
      console.log(sorted)
      this.setState({
        beerDataInState: sorted
      })
    }
    

  }

  // handleSortByName = () => {
    
  // }

  // handleSortByType = () => {
    
  // }

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
            <FilterSection />
          </div>
          <div className="sortAndProductSectionCon">{/* Potential component? */}

            <SortSection 
            beerDataInState={this.state.beerDataInState}
            handleSortByPrice={this.handleSortByPrice}/>
            
            <ProductDisplaySection
              // afterAPIloads={this.state.afterAPIloads}
              beerDataInState={this.state.beerDataInState}/>
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