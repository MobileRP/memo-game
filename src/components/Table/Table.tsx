import { Card } from 'components';
import React from 'react';
import './style.css';
import { Cards } from 'types';
type Props = {
  cards: Cards;
};
export const Table: React.FC<Props> = ({ cards }) => (
  <div className="table">
    <div className={'card-container'}>
      {cards.map((el, idx) => (
        <Card item={el} id={idx} key={idx + el.status} />
      ))}
    </div>
  </div>
);
