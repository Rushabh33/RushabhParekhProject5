import React from 'react';

const SortOptions = (props) => {
  const handleOnChange = e => {
    props.handleSortandFilter(e.target.value)
  }

  return (
    <div>
      <form className='sortForm'>
        <div className='sortOption'>
          <label htmlFor=""><p>Sort by: </p> </label>
          <select name="" id="" onChange={handleOnChange}>
            <option value="" selected disabled hidden>Choose here</option>
            <option value="price sortAscending">Price: Low to High</option>
            <option value="price sortDecending">Price: High to Low</option>
            <option value="name sortAscending">Product Name: A - Z</option>
            <option value="name sortDecending">Product Name: Z - A</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default SortOptions