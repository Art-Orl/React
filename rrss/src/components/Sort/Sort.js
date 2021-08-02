import React from 'react';

import './Sort.scss';

export function Sort({ setSort, setPageSize }) {
  const selectValue = React.createRef();
  const pageSize = React.createRef();

  const switchSort = () => {
    setSort(selectValue.current.value);
  };

  const switchPageSize = () => {
    setPageSize(pageSize.current.value);
  };
  return (
    <div className="sort__comtainer">
      <div>
        Сортировать по:
        <select onChange={switchSort} ref={selectValue}>
          <option value={'popularity'}>по популярности</option>
          <option value={'publishedAt'}>по дате</option>
          <option value={'relevancy'}>по релевантности</option>
        </select>
      </div>
      <div>
        Сортировать по:
        <select onChange={switchPageSize} ref={pageSize}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
    </div>
  );
}
