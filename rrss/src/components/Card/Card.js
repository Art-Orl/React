import React from 'react';

import './Card.css';

export function Card({ name, surname, email, bDay, sex, checkbox, id }) {
  return (
    <div className="card__container">
      <h1>Пользователь {id}</h1>
      <div>
        <span>Имя:</span>
        {name}
      </div>
      <div>
        <span>Фамилия:</span>
        {surname}
      </div>
      <div>
        <span>Email:</span>
        {email}
      </div>
      <div>
        <span> Дата рождения:</span>
        {bDay}
      </div>
      <div>
        <span>Пол:</span>
        {sex}
      </div>
      <div>
        <span>Подписка:</span>
        {checkbox}
      </div>
    </div>
  );
}
