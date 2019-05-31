import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import SortSection from './components/SortSection.js';
import FilterSection from './components/FilterSection.js';
import ProductDisplaySection from './components/ProductDisplaySection.js';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header />
      <main>
        <div className="filterSectionCon">
          <FilterSection />
        </div>
        <div className="sortAndProductSectionCon">
          <SortSection />
          <ProductDisplaySection />
        </div>
      </main>
    </div>
  )
  }
}

export default App;
