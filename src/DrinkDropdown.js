import React from 'react';


export default function DrinkDropdown({ setDrink }) {
  return (
    <div>
            Select Drink
      <select onChange={e => setDrink(e.target.value)}> 
        <option value="1">Soda</option>
        <option value="2">Juice</option>
        <option value="3">Smoothie</option>
      </select>
    </div>
  );
}
