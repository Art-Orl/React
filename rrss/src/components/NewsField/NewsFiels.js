import React, { useState, useEffect } from 'react';

import { Item } from '../Item/Item';

export function NewsField() {
  const apiKey = 'c27e93c88c0a4b02be787e0e00deb11e';

  const [news, setNews] = useState({
    articles: [],
  });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      'https://newsapi.org/v2/everything?q=Apple&from=2021-08-02&sortBy=popularity&apiKey=c27e93c88c0a4b02be787e0e00deb11e',
    );
    const items = await data.json();
    console.log(items);
    setNews(items);
  };

  return (
    <div>
      {news.articles.map((item) => {
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
        // console.log(item.content);
      })}
    </div>
  );
}
