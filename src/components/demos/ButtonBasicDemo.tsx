import { Button } from "liquidify-react/button";

export default function ButtonBasicDemo() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="filled" tone="accent">Filled Accent</Button>
      <Button variant="tinted" tone="neutral">Tinted Neutral</Button>
      <Button variant="plain" tone="neutral">Plain</Button>
    </div>
  );
}
