import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ComboboxDemo from "../ComboboxDemo";
import NumberInputDemo from "../NumberInputDemo";
import SelectDemo from "../SelectDemo";

describe("Select/Combobox/NumberInput demos", () => {
  it("renders select label", () => {
    render(<SelectDemo />);
    expect(screen.getByText("Choose a fruit")).toBeInTheDocument();
  });

  it("renders combobox label", () => {
    render(<ComboboxDemo />);
    expect(screen.getByText("Choose Framework")).toBeInTheDocument();
  });

  it("renders number input label", () => {
    render(<NumberInputDemo />);
    expect(screen.getByText("Quantity")).toBeInTheDocument();
  });
});
