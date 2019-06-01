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
     beersOnDisplay: null
    }
  }

  // componentDidMount(){
  //   axios.get('http://ontariobeerapi.ca/products')
  //   .then(res => {
  //     console.log(res);
  //   } )
  // }

  // $.ajax({
  //   url: 'http://proxy.hackeryou.com',
  //   dataType: 'json',
  //   method:'GET',
  //   data: {
  //     reqUrl: 'http://ontariobeerapi.ca/products/'
  //     },
  //     xmlToJSON: false,
  //     useCache: false
  //   }
  // })

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
          //beerOfTheDay: null //I wanted to add this AFTER, based on a function instead of needing a state...should I even avoid tusing a state? Need to put it here so that we're able to create bOFtheDAy AFER .then()....Be weary of the speed here! It cant be set based on products because products is created too soon before BeeoftheDat can be based on it ...prolly wanna just make this a default state up top**
        })
    })
  }

  
  randomNumber = () => {
    return Math.floor(Math.random() * 2875) + 1; // EVENTUALLY MAKE 2875 A VARIABLE
  }

  
  // beerOfTheDayFunc = () => {
  //   if (this.state.products){
  //    const productsArray = this.state.products //Immediately this is empty, untill after the state updates
  //     const randomBeersDisplay = [productsArray[this.randomNumber()], productsArray[this.randomNumber()]]
  //     this.setState({
  //       randomBeersDisplay: productsArray
  //     })
  //   }
  // }
  
  render(){
    const productsArray = this.state.products //Immediately this is empty, untill after the state updates
    const productsCheck = this.state.products.slice(0, 3)
    const randomBeersDisplay = [productsArray[this.randomNumber()], productsArray[this.randomNumber()]]
    console.log(productsCheck)
    return (
      <div className="App">
        <Header />
        <main>
          <div className="filterSectionCon"> {/* Potential component? */}
            <FilterSection />
          </div>
          <div className="sortAndProductSectionCon">{/* Potential component? */}
            <SortSection />
            <ProductDisplaySection randomBeersDisplay={randomBeersDisplay} />
            {/* {this.renderProducts(randomBeersDisplay)} */}
          </div>
        </main>
      </div>
    )
  }
}

export default App;
// 