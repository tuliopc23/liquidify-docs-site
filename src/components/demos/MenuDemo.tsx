import React from 'react';
import { Menu } from 'liquidify-react/ark-ui/menu';
import { Button } from 'liquidify-react/button';

export default function MenuDemo(): JSX.Element {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="secondary">Options</Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item onClick={() => console.log('Profile')}>Profile</Menu.Item>
          <Menu.Item onClick={() => console.log('Settings')}>Settings</Menu.Item>
          <Menu.Separator />
          <Menu.Item onClick={() => console.log('Logout')}>Logout</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}
