import { ComponentMeta } from '@storybook/react';

import Example from './Example';

export default {
  title: 'Map-Area',
  component: Example,
} as ComponentMeta<typeof Example>;

export const BasicExample = () => <Example />;
