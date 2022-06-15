import React from 'react';


export default function OrderImages({ drinkId, desertId, pizzaId, saladId }) {
  return (
    <div className="order">
      <img src={`drink-${drinkId}.jpg`} />
      <img src={`desert-${desertId}.jpg`} />
      <img src={`pizza-${pizzaId}.jpg`} />
      <img src={`salad-${saladId}.jpg`} />
    </div>
  );
}