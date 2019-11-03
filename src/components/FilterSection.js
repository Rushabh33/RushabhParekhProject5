import React, { Component } from 'react';
import searchIcon from '../assets/searchIcon.svg'
import { toggleClassList } from '../utilityFunctions'

class FilterSection extends Component {
  constructor() {
    super()
    this.state = {
      oldCheckedElement: ''
    }
  }

  clearSearchValue = () => {
    const searchValue = document.getElementById('productSearch')
    searchValue.value = ''
  }

  handleChange = (e) => {
    const userQuery = `checkbox ${e.target.name}`
    this.props.handleSortandFilter(userQuery)
    const choosenOption = document.getElementsByName(e.target.name)[0].parentElement.parentElement
    if (Boolean(this.state.oldCheckedElement)) {
      toggleClassList(this.state.oldCheckedElement, 'selected')
    }
    toggleClassList(choosenOption, 'selected')
    this.setState({
      oldCheckedElement: choosenOption
    })
    this.clearSearchValue()
  }


  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleSearchChange = (e) => {
    const userQuery = `name ${e.target.value}`
    this.props.handleSortandFilter(userQuery)
  }

  render() {
    return (
      <div className='filterSection hideFilter'>
        <div className="hideFilterDiv">
          <form onSubmit={this.handleSubmit}>
            <div className='productSearchContainer'>
              <label htmlFor="productSearch" className='hidden'>Search by name</label>
              <input type="search" id='productSearch' placeholder='Search Product by Name' onChange={this.handleSearchChange} />
              <button>
                <img src={searchIcon} alt="search icon" />
              </button>
            </div>
          </form>
          <form>
            <div className='filterCategory'>
              <h3>Country</h3>
              <ul className='filterList'>
                <li className='filterOption'>
                  <label>
                    <input name='country Canada' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Canada
              </label>
                </li>
                <li className='filterOption' >
                  <label>
                    <input name='country United States' type="checkbox" className='hidden' onChange={this.handleChange} />
                    United States
                  </label>
                </li>
                <li className='filterOption'>
                  <label>
                    <input name='country Mexico' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Mexico
              </label>
                </li>
                <li className='filterOption'>
                  <label>
                    <input name='country Germany' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Germany
              </label>
                </li>
                <li className='filterOption'>
                  <label>
                    <input name='country Belgium' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Belgium
              </label>
                </li>
                <li className='filterOption'>
                  <label>
                    <input name='country Ireland' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Ireland
              </label>
                </li>
                <li className='filterOption'>
                  <label>
                    <input name='country Denmark' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Denmark
              </label>
                </li>
              </ul>
            </div>
          </form>
          <form>
            <div className='filterCategory'>
              <h3>Beer Type</h3>
              <ul className='filterList'>
                <li className='filterOption'>
                  <label>
                    <input name='type Malt' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Malt
              </label>
                </li>
                <li className='filterOption'>
                  <label>
                    <input name='type Lager' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Lager
              </label>
                </li>
                <li className='filterOption'>
                  <label>
                    <input name='type Ale' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Ale
              </label>
                </li>
                <li className='filterOption'>
                  <label>
                    <input name='type Flavoured Malt' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Flavoured Malt
              </label>
                </li>
                <li className='filterOption'>
                  <label>
                    <input name='type Porter' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Porter
              </label>
                </li>
                <li className='filterOption'>
                  <label>
                    <input name='type Stout' type="checkbox" className='hidden' onChange={this.handleChange} />
                    Stout
              </label>
                </li>
              </ul>
            </div>

          </form>
        </div>

      </div>
    )
  }
}

export default FilterSection