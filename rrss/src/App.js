import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { NewsField } from './components/NewsField/NewsFiels';
import { Sort } from './components/Sort/Sort';

import './App.css';

export function App() {
  const [search, setSearch] = useState(null);
  const [sort, setSort] = useState('popularity');
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />
      <Sort setPageSize={setPageSize} setSort={setSort} />
      {loading ? <div>Загрузка</div> : null}
      <NewsField pageSize={pageSize} setLoading={setLoading} search={search} sort={sort} />
    </div>
  );
}
