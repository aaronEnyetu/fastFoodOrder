import { useState } from 'react';
import './App.css';

import DrinkDropdown from './DrinkDropdown';
import DesertDropdown from './DesertDropdown';
import PizzaDropdown from './PizzaDropdown';
import SaladDropdown from './SaladDropdown';
import InstructionList from './InstructionList';
import InstructionForm from './InstructionForm';
import OrderName from './OrderName';
import OrderImages from './OrderImages';

function App() {

  const [drinkId, setDrink] = useState(1);
  const [desertId, setDesert] = useState(1);
  const [pizzaId, setPizza] = useState(1);
  const [saladId, setSalad] = useState(1);
  const [orderName, setOrderName] = useState();
  const [instructions, setInstructions] = useState(['No cheese']);
  return (
    <div className="App">
      <OrderImages drinkId={drinkId} desertId={desertId} pizzaId={pizzaId} saladId={saladId} />
      <h1>
        Here is your Order {orderName}
      </h1>
      <div className="bottom">
        <OrderName setOrderName={setOrderName} />
        <section className='dropdowns'>
          <DrinkDropdown setDrink={setDrink} />
          <DesertDropdown setDesert={setDesert} />
          <PizzaDropdown setPizza={setPizza} />
          <SaladDropdown setSalad={setSalad} />
        </section>

        <InstructionForm setInstructions={setInstructions} instructions={instructions} />
        <InstructionList instructions={instructions} />

      </div>
    </div>
  );
}

export default App;
