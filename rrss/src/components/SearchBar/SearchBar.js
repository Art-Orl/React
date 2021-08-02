import React from 'react';

import './SearchBar.scss';

export function SearchBar(setSearch) {
  const searchValue = React.ref();

  const searchResult = () => {
    console.log(searchValue.value);
  };

  return (
    <div className="search__container">
      <input type="text" placeholder="Search..." ref={searchValue} />
      <button onClick={searchResult}>найти</button>
    </div>
  );
}
