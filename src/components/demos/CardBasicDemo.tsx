import { Card } from "liquidify-react/card";

export default function CardBasicDemo() {
  return (
    <Card variant="glass" padded>
      <h3 style={{ margin: "0 0 0.5rem 0" }}>Card Title</h3>
      <p style={{ margin: "0", color: "#666" }}>
        This is a basic card with liquid glass styling. The glass variant provides beautiful translucent backgrounds with blur effects.
      </p>
    </Card>
  );
}
