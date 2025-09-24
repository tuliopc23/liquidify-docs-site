import React, { useMemo, useState } from 'react';
import { Combobox } from 'liquidify-react/ark-ui/combobox';

export default function ComboboxDemo(): JSX.Element {
  const allItems = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ];
  const [inputValue, setInputValue] = useState('');
  const filtered = useMemo(
    () => allItems.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase())),
    [inputValue]
  );
  return (
    <div>
      <div>Choose Framework</div>
      <Combobox.Root items={filtered} inputValue={inputValue} onInputValueChange={setInputValue}>
        <Combobox.Control>
          <Combobox.Input placeholder="Type to search..." />
          <Combobox.Trigger>⌄</Combobox.Trigger>
        </Combobox.Control>
        <Combobox.Positioner>
          <Combobox.Content>
            {filtered.length === 0 ? (
              <div style={{ padding: '1rem', color: '#666' }}>No results</div>
            ) : (
              filtered.map((item) => (
                <Combobox.Item key={item.value} item={item}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                </Combobox.Item>
              ))
            )}
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Root>
    </div>
  );
}
