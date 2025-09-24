import { Card } from "liquidify-react/card";

export default function CardVariantsDemo() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Card variant="solid" padded style={{ minWidth: "200px" }}>
        <h4 style={{ margin: "0 0 0.5rem 0" }}>Solid</h4>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>Opaque background</p>
      </Card>
      <Card variant="glass" padded style={{ minWidth: "200px" }}>
        <h4 style={{ margin: "0 0 0.5rem 0" }}>Glass</h4>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>Translucent blur</p>
      </Card>
      <Card variant="elevated" padded style={{ minWidth: "200px" }}>
        <h4 style={{ margin: "0 0 0.5rem 0" }}>Elevated</h4>
        <p style={{ margin: 0, fontSize: "0.9rem" }}>Raised with shadow</p>
      </Card>
    </div>
  );
}
