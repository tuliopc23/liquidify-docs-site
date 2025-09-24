import { Button } from "liquidify-react/button";

export default function ButtonSizesDemo() {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
      <Button size="compact">Compact</Button>
      <Button size="regular">Regular</Button>
      <Button size="large">Large</Button>
    </div>
  );
}
