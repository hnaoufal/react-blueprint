import React, { useState } from 'react';
import { ListComponent } from './ListCompnont';

export const Bosch = () => {
  const [active, setActive] = useState(false);
  const [list, setList] = useState(['eotuhnoetuhn', 'oentuhoenthunoteh']);

  return (
    <div>
      {active && <h1>oentuhoenuh</h1>}
      <button onClick={() => setActive(true)}>Click me</button>
      <ListComponent list={list} />
      <ListComponent list={['onetuhoenhu', 'eontuhntoeuhnt', 'eouhonethuntohu']} />
    </div>
  )
};

// React
// React (jsx)
// React (Props)
// React (State)


// Other topics
// Routing?
// Requests?
// State Handling
