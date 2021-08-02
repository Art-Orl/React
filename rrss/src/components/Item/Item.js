import React from 'react';

import './Item.scss';

export function Item({ author, content, description, publishedAt, title, url, urlToImage }) {
  return (
    <div className="item__container">
      <div>{author}</div>
      <div>{content}</div>
      <div>{description}</div>
      <div>{publishedAt}</div>
      <div>{title}</div>
      <a href={url}>{url}</a>
      <img src={urlToImage} />
    </div>
  );
}
