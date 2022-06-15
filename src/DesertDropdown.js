import React from 'react';


export default function DesertDropdown({ setDesert }) {
  return (
    <div>
            Select Desert
      <select onChange={e => setDesert(e.target.value)}>
        <option value="1">Chocolate chip cookie</option>
        <option value="2">Mexican Sundae</option>
        <option value="3">Carrot cake</option>
      </select>
    </div>
  );
}