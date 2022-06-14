import React from 'react';

export default function OrderName({ setOrderName }) {
  return (
    <section>
            What is the order Name?

      <input onChange={e => setOrderName(e.target.value)} />
    </section>
  );
}