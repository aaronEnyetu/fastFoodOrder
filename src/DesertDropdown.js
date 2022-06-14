import React from 'react';


export default function DesertDropdown({ setDesert }) {
  return (
    <div>
            Select Desert
      <select onChange={e => setDesert(e.target.value)}>
        <option value="1">Chocolate cake</option>
        <option value="2">Sundae</option>
        <option value="3">Muse</option>
      </select>
    </div>
  );
}