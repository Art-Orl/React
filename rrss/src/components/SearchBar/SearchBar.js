import React from 'react';

import './SearchBar.scss';

export function SearchBar() {
  return (
    <div className="search__container">
      <input type="text" placeholder="Search..." />
    </div>
  );
}
