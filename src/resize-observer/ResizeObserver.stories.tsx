import { ComponentMeta } from '@storybook/react';

import Example from './hook/Example';

export default {
  title: 'Resize observer',
  component: Example,
} as ComponentMeta<typeof Example>;

export const ResizeObserverExample = () => <Example />;
