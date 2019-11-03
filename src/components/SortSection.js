import React from 'react';
import ToggleFilter from './ToggleFilter';
import SortOptions from './SortOptions';

const SortSection = ({ handleSortandFilter }) => {
  return (
    <div className='sortSectionContainer'>
      <div className='wrapper'>
        <ToggleFilter />
        <SortOptions handleSortandFilter={handleSortandFilter} />
      </div>
    </div>
  )
}

export default SortSection