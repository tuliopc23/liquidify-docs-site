import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import DialogDemo from "../DialogDemo";

describe("DialogDemo", () => {
  it("renders trigger button", () => {
    render(<DialogDemo />);
    expect(screen.getByText("Open Dialog")).toBeInTheDocument();
  });
});
