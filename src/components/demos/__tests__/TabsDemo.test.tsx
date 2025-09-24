import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import TabsDemo from "../TabsDemo";

describe("TabsDemo", () => {
  it("renders tab triggers", () => {
    render(<TabsDemo />);
    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });
});
