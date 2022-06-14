import React from 'react';


export default function SaladDropdown({ setSalad }) {
  return (
    <div>
            Select Salad
      <select onChange={e => setSalad(e.target.value)}>
        <option value="1">greek</option>
        <option value="2">Caesar</option>
        <option value="3">Leafy green</option>
      </select>
    </div>
  );
}