import React from 'react';
import { RadioGroup } from 'liquidify-react/ark-ui/radioGroup';

export default function RadioGroupDemo(): JSX.Element {
  return (
    <RadioGroup.Root defaultValue="medium">
      <RadioGroup.Label>Size</RadioGroup.Label>
      <div style={{ display: 'flex', gap: 12 }}>
        <RadioGroup.Item value="small">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>Small</RadioGroup.ItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value="medium">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>Medium</RadioGroup.ItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value="large">
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>Large</RadioGroup.ItemText>
        </RadioGroup.Item>
      </div>
    </RadioGroup.Root>
  );
}
