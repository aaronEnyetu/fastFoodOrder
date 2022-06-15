import React from 'react';

export default function PizzaDropdown({ setPizza }) {
  return (
    <div>
            Select Pizza

      <select onChange={e => setPizza(e.target.value)}>
        <option value="1">Margherita</option>
        <option value="2">Vegetarian</option>
        <option value="3">Bolognese</option>
      </select>
    </div>
  );
}