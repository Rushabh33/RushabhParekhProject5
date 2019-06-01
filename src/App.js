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
     products: []
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
  //   this.setState({
  //     beerOfTheDay: this.state.products[0]
  //   })
  //   // console.log(this.state.beerOfTheDay)
  // }



  render(){
    const productsArray = [...this.state.products]
    const beerOfTheDay1 = [productsArray[this.randomNumber()]]
    return (
      <div className="App">
        <Header />
        <main>
          <div className="filterSectionCon"> {/* Potential component? */}
            <FilterSection />
          </div>
          <div className="sortAndProductSectionCon">{/* Potential component? */}
            <SortSection />
            <ProductDisplaySection beerOfTheDay={beerOfTheDay1} />
          </div>
        </main>
      </div>
    )
  }
}

export default App;
// 