import { Tooltip } from "liquidify-react/ark-ui/tooltip";

export default function TooltipDemo(): JSX.Element {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger>
        <button type="button">Hover me</button>
      </Tooltip.Trigger>
      <Tooltip.Positioner>
        <Tooltip.Content>This is a helpful tooltip message</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
}
