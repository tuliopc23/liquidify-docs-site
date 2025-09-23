import React from 'react';
import { Tabs } from 'liquidify-react/ark-ui/tabs';

export default function TabsDemo(): JSX.Element {
  return (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="details">Details</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">
        <h3>Project Overview</h3>
        <p>A comprehensive view of your project's current status and key metrics.</p>
      </Tabs.Content>
      <Tabs.Content value="details">
        <h3>Project Details</h3>
        <p>Detailed information about project specifications and requirements.</p>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <h3>Project Settings</h3>
        <p>Configure project preferences and advanced options.</p>
      </Tabs.Content>
    </Tabs.Root>
  );
}
