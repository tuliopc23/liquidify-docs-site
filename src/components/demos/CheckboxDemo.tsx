import React from 'react';
import { Checkbox } from 'liquidify-react/ark-ui/checkbox';

export default function CheckboxDemo(): JSX.Element {
  return (
    <Checkbox.Root>
      <Checkbox.Control>
        <Checkbox.Indicator>✓</Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    </Checkbox.Root>
  );
}
