import React from 'react';
import { Accordion } from 'liquidify-react/ark-ui/accordion';

export default function AccordionDemo(): JSX.Element {
  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.ItemTrigger>What is LiqUIdify?</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          A React component library inspired by Apple's Human Interface Guidelines.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.ItemTrigger>How do I install it?</Accordion.ItemTrigger>
        <Accordion.ItemContent>
          Run npm install liquidify-react to get started.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
