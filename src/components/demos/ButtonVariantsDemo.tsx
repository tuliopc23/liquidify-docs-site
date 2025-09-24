import { Button } from "liquidify-react/button";

export default function ButtonVariantsDemo() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="filled" tone="accent">Filled Accent</Button>
        <Button variant="filled" tone="neutral">Filled Neutral</Button>
        <Button variant="filled" tone="destructive">Filled Destructive</Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="tinted" tone="accent">Tinted Accent</Button>
        <Button variant="tinted" tone="neutral">Tinted Neutral</Button>
        <Button variant="tinted" tone="destructive">Tinted Destructive</Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="plain" tone="accent">Plain Accent</Button>
        <Button variant="plain" tone="neutral">Plain Neutral</Button>
        <Button variant="plain" tone="destructive">Plain Destructive</Button>
      </div>
    </div>
  );
}
