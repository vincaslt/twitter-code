import { ComponentMeta } from '@storybook/react';

import Example from './Example';

export default {
  title: 'Scroll to element',
  component: Example,
} as ComponentMeta<typeof Example>;

export const ScrollToElementExample = () => <Example />;
