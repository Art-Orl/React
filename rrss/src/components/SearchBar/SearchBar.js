import React from 'react';

import './SearchBar.scss';

export function SearchBar(search, setSearch) {
  const searchValue = React.createRef();

  const searchResult = (e) => {
    // e.preventDefault();
    console.log(searchValue.current.value);
    console.log(search);
    setSearch('1');
  };

  return (
    <div className="search__container">
      <input type="text" placeholder="Search..." ref={searchValue} />
      <button
        onClick={() => {
          setSearch(searchValue.current.value);
        }}>
        найти
      </button>
    </div>
  );
}
