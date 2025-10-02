import { NumberInput } from "liquidify-react/ark-ui/numberInput";
import { useState } from "react";

export default function NumberInputDemo(): JSX.Element {
  const [value, setValue] = useState("10");
  return (
    <div>
      <div>Quantity</div>
      <NumberInput.Root value={value} onValueChange={(d) => setValue(d.value)} min={0} max={100}>
        <NumberInput.Control>
          <NumberInput.DecrementTrigger>-</NumberInput.DecrementTrigger>
          <NumberInput.Input />
          <NumberInput.IncrementTrigger>+</NumberInput.IncrementTrigger>
        </NumberInput.Control>
      </NumberInput.Root>
      <p>Value: {value}</p>
    </div>
  );
}
