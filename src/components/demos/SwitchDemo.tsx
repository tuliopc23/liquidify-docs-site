import React from 'react';
import { Switch } from 'liquidify-react/ark-ui/switch';

export default function SwitchDemo(): JSX.Element {
  return (
    <Switch.Root defaultChecked>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Enable notifications</Switch.Label>
    </Switch.Root>
  );
}
