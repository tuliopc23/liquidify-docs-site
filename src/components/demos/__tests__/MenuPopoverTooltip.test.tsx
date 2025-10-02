import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MenuDemo from "../MenuDemo";
import PopoverDemo from "../PopoverDemo";
import TooltipDemo from "../TooltipDemo";

describe("Menu/Popover/Tooltip demos", () => {
  it("renders menu trigger", () => {
    render(<MenuDemo />);
    expect(screen.getByText("Options")).toBeInTheDocument();
  });

  it("renders popover trigger", () => {
    render(<PopoverDemo />);
    expect(screen.getByText("Open Popover")).toBeInTheDocument();
  });

  it("renders tooltip trigger", () => {
    render(<TooltipDemo />);
    expect(screen.getByText("Hover me")).toBeInTheDocument();
  });
});
