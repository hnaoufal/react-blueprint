import React, { useState } from 'react';
import { ListComponent } from './ListCompnont';
import axios from 'axios';

export const Bosch = () => {
  const [active, setActive] = useState(false);
  const [list, setList] = useState(['eotuhnoetuhn', 'oentuhoenthunoteh']);

  return (
    <div>
      {active && <h1>oentuhoenuh</h1>}
      <button onClick={() => setActive(true)}>Click me</button>
      <ListComponent list={list}>
        Inside List
      </ListComponent>
      <ListComponent list={['onetuhoenhu', 'eontuhntoeuhnt', 'eouhonethuntohu']} />
    </div>
  )
};
