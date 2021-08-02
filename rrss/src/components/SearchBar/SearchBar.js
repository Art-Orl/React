import React from 'react';

import './SearchBar.scss';

export function SearchBar({ setSearch }) {
  function searchResult() {
    setSearch(searchValue.current.value);
  }

  const searchValue = React.createRef();

  return (
    <div className="search__container">
      <input type="text" placeholder="Search..." ref={searchValue} />
      <div onClick={() => searchResult()}>найти</div>
    </div>
  );
}
