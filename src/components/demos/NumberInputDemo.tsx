import React, { useState } from 'react';
import { NumberInput } from 'liquidify-react/ark-ui/numberInput';

export default function NumberInputDemo(): JSX.Element {
  const [value, setValue] = useState('10');
  return (
    <NumberInput.Root value={value} onValueChange={(d) => setValue(d.value)} min={0} max={100}>
      <NumberInput.Label>Quantity</NumberInput.Label>
      <NumberInput.Control>
        <NumberInput.DecrementTrigger>-</NumberInput.DecrementTrigger>
        <NumberInput.Input />
        <NumberInput.IncrementTrigger>+</NumberInput.IncrementTrigger>
      </NumberInput.Control>
      <p>Value: {value}</p>
    </NumberInput.Root>
  );
}
