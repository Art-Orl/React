import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { NewsField } from './components/NewsField/NewsFiels';

import './App.css';

export function App() {
  const [search, setSearch] = useState(null);

  return (
    <div className="App">
      <SearchBar setSearch={setSearch} />
      <NewsField search={search} />
    </div>
  );
}
