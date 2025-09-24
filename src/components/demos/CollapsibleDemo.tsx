import React from "react";
import { Collapsible } from "liquidify-react/ark-ui/collapsible";

export default function CollapsibleDemo(): JSX.Element {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>Show more details</Collapsible.Trigger>
      <Collapsible.Content>
        <div style={{ padding: 12, border: "1px solid #eee" }}>Hidden content</div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
