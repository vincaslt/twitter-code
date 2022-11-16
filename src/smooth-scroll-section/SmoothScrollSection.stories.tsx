import { ComponentMeta } from '@storybook/react';

import Example from './Example';

export default {
  title: 'Smooth scroll section',
  component: Example,
} as ComponentMeta<typeof Example>;

export const ResizeObserverExample = () => <Example />;
