import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header'
import PageBanner from './components/PageBanner'
import ProductSection from './components/ProductSection'

class App extends Component {

  render() {
    return (
      <div className='body'>
        <Header />
        <PageBanner />
        <ProductSection />
      </div>
    )
  }
}

export default App;
