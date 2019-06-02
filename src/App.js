import React, {Component} from 'react';
import axios from 'axios';
import qs from 'qs';
import './App.css';
import Header from './components/Header.js';
import SortSection from './components/SortSection.js';
import FilterSection from './components/FilterSection.js';
import ProductDisplaySection from './components/ProductDisplaySection.js';
// https://cors-anywhere.herokuapp.com//

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
          randomTest: [response.data[this.randomNumber()], response.data[this.randomNumber()]]
        })
    })
  }

  
  randomNumber = () => {
    return Math.floor(Math.random() * 2875) + 1; // EVENTUALLY MAKE 2875 A VARIABLE
  }

  
  beerOfTheDayTrigger = () => {
    const productsArray = this.state.products
    const beerDataInState = this.state.beerDataInState
                console.log("beer of the day FUNCTION")
                console.log(productsArray)
    if (productsArray.length && beerDataInState == false ) {

      const beersOfTheDayData = [productsArray[this.randomNumber()], productsArray[this.randomNumber()]]
                console.log("beer of the day FUNCTION - hopefuly after the api called")
                console.log(beersOfTheDayData)
      this.setState({
        beerDataInState: beersOfTheDayData
      })
    }
    
  }
  
  render(){
    // const productsArray = this.state.products //Immediately this is empty, untill after the state updates
    // const productsCheck = this.state.products.slice(0, 3)
    // const randomBeersDisplay = [productsArray[this.randomNumber()], productsArray[this.randomNumber()]]
    // console.log(productsCheck)
    console.log(this.state.afterAPIloads) // should have 2 
    console.log(this.state.beerDataInState)
    console.log(this.state.randomTest)
    // const beersData = this.state.


    return (
      <div className="App">
        <Header />
        <main>
          <div className="filterSectionCon"> {/* Potential component? */}
            <FilterSection />
          </div>
          <div className="sortAndProductSectionCon">{/* Potential component? */}
            <SortSection />
            <ProductDisplaySection
              afterAPIloads={this.state.afterAPIloads}
              beerDataInState={this.state.beerDataInState}
              beerOfTheDayTrigger={this.beerOfTheDayTrigger}/>
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