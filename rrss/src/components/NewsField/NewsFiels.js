import React, { useState, useEffect } from 'react';

import { Item } from '../Item/Item';

export function NewsField({ search, sort, pageSize, setLoading }) {
  const apiKey = 'c27e93c88c0a4b02be787e0e00deb11e';

  const [news, setNews] = useState({
    articles: [],
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchItems();
  }, [search, sort, page, pageSize]);

  const fetchItems = async () => {
    setLoading(true);
    const data = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&from=2021-08-02&sortBy=${sort}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`,
    );
    const items = await data.json();
    console.log(items);
    setNews(items);
    setLoading(false);
  };

  return (
    <div>
      {search
        ? news.articles.map((item) => {
            return (
              <Item
                author={item.author}
                content={item.content}
                description={item.description}
                publishedAt={item.publishedAt}
                title={item.title}
                url={item.url}
                urlToImage={item.urlToImage}
              />
            );
          })
        : null}
    </div>
  );
}
