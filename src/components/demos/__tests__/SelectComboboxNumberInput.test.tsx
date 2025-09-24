import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import SelectDemo from "../SelectDemo";
import ComboboxDemo from "../ComboboxDemo";
import NumberInputDemo from "../NumberInputDemo";

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
