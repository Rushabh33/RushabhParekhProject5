import React, { Component } from 'react';
import SortSection from './SortSection'
import FilterSection from './FilterSection'
import ProductDisplay from './ProductDisplay'

class ProductSection extends Component {
  constructor() {
    super()
    this.state = {
      originalData: [],
      refinedData: [],
      userOrganizedData: [],
      displayedData: [],
      indexOfFirstDisplayedProduct: 0,
      productsPerPage: 9
    }
  }

  componentDidMount() {
    this.getTheBeerStoreData('products')
      .then(data => {
        this.setState({
          originalData: data,
          refinedData: this.refineTheBeerStoreData(data)
        }, () => this.updateDisplayedData('reset', this.state.refinedData))
      })
  }

  getTheBeerStoreData = async (querySpec) => {
    const baseUrl = 'http://ontariobeerapi.ca/'
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const response = await fetch(proxy + baseUrl + querySpec);
    const data = await response.json()
    return data
  }

  // Business Decision: To eliminate product repetition and just display the lowest quantity/price
  refineTheBeerStoreData = (data) => {
    const refinedData = data.reduce((acc, productInfo) => {
      const currentBeerId = productInfo.beer_id.toString()
      if (!(currentBeerId in acc) || (+acc[currentBeerId].price > productInfo.price)) {
        acc[currentBeerId] = productInfo
      }
      return acc
    }, {})
    return Object.values(refinedData)
  }

  handleSortandFilter = (userQuery) => {
    userQuery.includes('checkbox') || userQuery.includes('name')
      ? this.updateDisplayedData(userQuery, this.state.refinedData)
      : this.updateDisplayedData(userQuery, this.state.userOrganizedData)
  }

  updateDisplayedData = (query, dataSource) => {
    const dataToDisplay = [...dataSource]
    let userQuery = query.split(' ')
    console.log(userQuery)
    console.log(dataSource)
    if (userQuery.includes('reset')) {
      this.resetDisplayedProducts(dataSource)
    }
    else if (userQuery.includes('sortAscending')) {
      const sortedData = this.sortDisplayedDataAscending(userQuery[0], dataToDisplay)
      this.setUserOrganizedAndDisplayedData(sortedData)
    }
    else if (userQuery.includes('sortDecending')) {
      const sortedData = this.sortDisplayedDataDecending(userQuery[0], dataToDisplay)
      this.setUserOrganizedAndDisplayedData(sortedData)
    }
    else if (userQuery.includes('checkbox')) {
      const modifiedUserQuery = [userQuery[1], userQuery.slice(2).join(' ')]
      const filteredData = this.filterDisplayedData(modifiedUserQuery, dataToDisplay)
      this.setUserOrganizedAndDisplayedData(filteredData)
    }
    else if (userQuery.includes('name')) {
      const searchCategory = userQuery.shift()
      const searchName = userQuery.join(' ')
      const searchQuery = [searchCategory, searchName]
      const filteredData = this.filterDisplayedData(searchQuery, dataToDisplay)
      console.log(filteredData)
      this.setUserOrganizedAndDisplayedData(filteredData)
    }
  }

  filterDisplayedData = (userQuery, dataSource) => {
    if (!userQuery.includes('name')) {
      return dataSource.filter(productInfo => productInfo[userQuery[0]] === userQuery[1])
    }
    else {
      return dataSource.filter(productInfo => {
        return productInfo[userQuery[0]].toLowerCase().includes(userQuery[1].toLowerCase())
        // const productName = productInfo[userQuery[0]].toLowerCase()
        // const userQueryName = userQuery[1].toLowerCase()
        // return productName.includes(userQueryName)
      })
    }
  }

  resetDisplayedProducts = (dataSource) => {
    this.setState({
      indexOfFirstDisplayedProduct: 0
    }, () => this.setUserOrganizedAndDisplayedData(dataSource))
  }

  sortDisplayedDataAscending = (query, dataSource) => {
    if (query === 'name') {
      return dataSource.sort((a, b) => {
        const nameA = a[query].toUpperCase()
        const nameB = b[query].toUpperCase()
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
      })
    }
    return dataSource.sort((a, b) => {
      return a[query] - b[query]
    })
  }

  sortDisplayedDataDecending = (query, dataSource) => {
    if (query === 'name') {
      return dataSource.sort((a, b) => {
        const nameA = a[query].toUpperCase()
        const nameB = b[query].toUpperCase()
        return nameA > nameB ? -1 : nameA < nameB ? 1 : 0
      })
    }
    return dataSource.sort((a, b) => {
      return b[query] - a[query]
    })
  }

  setUserOrganizedAndDisplayedData = (data) => {
    const { indexOfFirstDisplayedProduct, productsPerPage } = this.state
    this.setState({
      userOrganizedData: [...data],
      displayedData: data.slice(indexOfFirstDisplayedProduct, (indexOfFirstDisplayedProduct + productsPerPage))
    })
  }

  render() {
    return (
      <div>
        <SortSection handleSortandFilter={this.handleSortandFilter} />
        <div className='productContainerLayout wrapper'>
          <FilterSection handleSortandFilter={this.handleSortandFilter} />
          <ProductDisplay displayedData={this.state.displayedData} />
          {/* {this.state.displayedData.length
            ? <ProductDisplay displayedData={this.state.displayedData} />
            : <div>loading</div>} */}
        </div>
      </div>
    )
  }
}

export default ProductSection