import React from "react";
import { DatePicker } from "liquidify-react/ark-ui/datePicker";

export default function DatePickerDemo(): JSX.Element {
  return (
    <DatePicker.Root>
      <DatePicker.Control>
        <DatePicker.Input placeholder="Select date" />
        <DatePicker.Trigger>📅</DatePicker.Trigger>
      </DatePicker.Control>
    </DatePicker.Root>
  );
}
