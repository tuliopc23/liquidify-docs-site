import { HoverCard } from "liquidify-react/ark-ui/hoverCard";
import { Button } from "liquidify-react/button";

export default function HoverCardDemo(): JSX.Element {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Button variant="secondary">Hover me</Button>
      </HoverCard.Trigger>
      <HoverCard.Positioner>
        <HoverCard.Content>
          <HoverCard.Arrow />
          <div style={{ padding: "12px" }}>
            <h4>Contextual Information</h4>
            <p>This card appears when you hover the trigger.</p>
          </div>
        </HoverCard.Content>
      </HoverCard.Positioner>
    </HoverCard.Root>
  );
}
