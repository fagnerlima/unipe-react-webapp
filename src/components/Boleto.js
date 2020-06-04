import React, { useState } from 'react';
import Card from './Card';

export default () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <Card
        title="Boleto 1"
        description="Descrição do Boleto 1"
        value={count}
      />
      <button onClick={increment}>Add</button>
    </div>
  );
}
