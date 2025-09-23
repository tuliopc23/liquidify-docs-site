import React from 'react';
import { Select } from 'liquidify-react/ark-ui/select';

export default function SelectDemo(): JSX.Element {
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
  ];
  return (
    <Select.Root items={options}>
      <Select.Label>Choose a fruit</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select an option" />
          <Select.Indicator>▼</Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {options.map((option) => (
            <Select.Item key={option.value} item={option}>
              <Select.ItemText>{option.label}</Select.ItemText>
              <Select.ItemIndicator>✓</Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
}
