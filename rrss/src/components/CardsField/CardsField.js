import React from 'react';

import { Card } from '../Card/Card';

import './CardsField.css';

export function CardsField({ person }) {
  return (
    <div className="cardsField__container">
      {person
        ? person.map((item) => (
            <Card
              id={item.id}
              name={item.name}
              surname={item.surname}
              email={item.email}
              bDay={item.bDay}
              sex={item.sex}
              checkbox={item.checkbox}
            />
          ))
        : null}
    </div>
  );
}
