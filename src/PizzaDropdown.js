import React from 'react';

export default function PizzaDropdown({ setPizza }) {
  return (
    <div>
            Select Pizza

      <select onChange={e => setPizza(e.target.value)}>
        <option value="1">Mushroom</option>
        <option value="2">Italian</option>
        <option value="3">Mediteranean</option>
      </select>
    </div>
  );
}