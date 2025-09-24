import React from "react";

interface TestComponentProps {
  message?: string;
}

export function TestComponent({ message = "React component is working!" }: TestComponentProps) {
  return (
    <div
      style={{
        padding: "16px",
        background: "#f0f0f0",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "16px 0",
      }}
    >
      <h4>Test Component</h4>
      <p>{message}</p>
      <button onClick={() => alert("React is interactive!")}>Click me!</button>
    </div>
  );
}
