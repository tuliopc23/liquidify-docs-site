import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DialogDemo from "../DialogDemo";

describe("DialogDemo", () => {
  it("renders trigger button", () => {
    render(<DialogDemo />);
    expect(screen.getByText("Open Dialog")).toBeInTheDocument();
  });
});
