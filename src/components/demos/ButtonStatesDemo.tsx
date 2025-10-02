import { Button } from "liquidify-react/button";

export default function ButtonStatesDemo() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="filled" tone="accent">
        Default
      </Button>
      <Button variant="filled" tone="accent" disabled>
        Disabled
      </Button>
      <Button variant="filled" tone="accent" loading>
        Loading
      </Button>
    </div>
  );
}
