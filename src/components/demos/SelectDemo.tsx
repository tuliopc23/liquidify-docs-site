import { Select } from "liquidify-react/ark-ui/select";

export default function SelectDemo(): JSX.Element {
  const options = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
  ];
  return (
    <div>
      <div>Choose a fruit</div>
      <Select.Root items={options}>
        <Select.Trigger>
          Open select <Select.Indicator>▼</Select.Indicator>
        </Select.Trigger>
        <Select.Positioner>
          <Select.Content>
            {options.map((option) => (
              <Select.Item key={option.value} item={option}>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    </div>
  );
}
