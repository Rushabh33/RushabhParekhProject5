import React from 'react';
import FilterIcon from '../assets/filterIcon.svg';
import { toggleClassList } from '../utilityFunctions'

const ToggleFilter = () => {

  let productList = null
  let filterSectionContainer = null
  let filterSection = null

  const handleClick = () => {
    productList = document.getElementsByClassName('productList')[0]
    filterSectionContainer = document.getElementsByClassName('filterSection')[0]
    filterSection = document.querySelector(".filterSection > div");
    toggleClassList(productList, 'onlyDisplayproductList')
    toggleClassList(filterSectionContainer, 'hideFilter')
    toggleClassList(filterSection, 'hideFilterDiv')
  }


  return (
    <div className='toggleFilterContainer'>
      <button className='filterBtn' onClick={handleClick}>
        <img src={FilterIcon} alt="filter icon" />
      </button>
    </div>
  )
}

export default ToggleFilter;