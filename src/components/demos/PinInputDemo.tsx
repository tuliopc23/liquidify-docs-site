import React from "react";
import { PinInput } from "liquidify-react/ark-ui/pinInput";

export default function PinInputDemo(): JSX.Element {
  return (
    <PinInput.Root>
      <div style={{ display: "flex", gap: 8 }}>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
        <PinInput.Input index={3} />
      </div>
    </PinInput.Root>
  );
}
