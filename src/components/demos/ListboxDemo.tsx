import React from "react";
import { Listbox } from "liquidify-react/ark-ui/listbox";

export default function ListboxDemo(): JSX.Element {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <Listbox.Root>
      <Listbox.Label>Choose a fruit</Listbox.Label>
      <Listbox.Trigger>
        <Listbox.Value placeholder="Select fruit..." />
        <Listbox.Indicator>▼</Listbox.Indicator>
      </Listbox.Trigger>
      <Listbox.Content>
        <Listbox.ItemGroup>
          {fruits.map((f) => (
            <Listbox.Item key={f} value={f}>
              <Listbox.ItemText>{f}</Listbox.ItemText>
            </Listbox.Item>
          ))}
        </Listbox.ItemGroup>
      </Listbox.Content>
    </Listbox.Root>
  );
}
