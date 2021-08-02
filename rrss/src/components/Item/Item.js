import React from 'react';

import './Item';

export function Item({ author, content, description, publishedAt, title, url, urlToImage }) {
  return (
    <div className="item__container">
      <div>{author}</div>
      <div>{content}</div>
      <div>{description}</div>
      <div>{publishedAt}</div>
      <div>{title}</div>
      <div>{url}</div>
      <img src={urlToImage} />
    </div>
  );
}
