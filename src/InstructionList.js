import React from 'react';
import Instruction from './Instruction';


export default function InstructionList({ instructions }) {
  return (
    <section>
      <h2>Preparation Instructions</h2>
      {instructions.map((instruction) => (<Instruction key={instruction} instruction={instruction} />))}
    </section>
  );
}
