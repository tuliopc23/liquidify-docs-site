import React from "react";
import { Dialog } from "liquidify-react/ark-ui/dialog";
import { Button } from "liquidify-react/button";

export default function DialogDemo(): JSX.Element {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Title>Confirm Action</Dialog.Title>
          <Dialog.Description>
            Are you sure you want to delete this item? This action cannot be undone.
          </Dialog.Description>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            <Dialog.CloseTrigger asChild>
              <Button variant="tinted" tone="neutral">Cancel</Button>
            </Dialog.CloseTrigger>
            <Button variant="filled" tone="destructive">Delete</Button>
          </div>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
