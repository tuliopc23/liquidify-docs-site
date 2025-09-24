import React from "react";
import { Popover } from "liquidify-react/ark-ui/popover";
import { Button } from "liquidify-react/button";

export default function PopoverDemo(): JSX.Element {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="secondary">Open Popover</Button>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow />
          <div style={{ padding: "16px" }}>
            <h3>Popover Title</h3>
            <p>This is the popover content that appears when triggered.</p>
            <Popover.CloseTrigger asChild>
              <Button size="sm">Close</Button>
            </Popover.CloseTrigger>
          </div>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
}
