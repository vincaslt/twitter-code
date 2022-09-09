import { ComponentMeta } from '@storybook/react';

import Example from './Example';

export default {
  title: 'Conditional CSS Classes',
  component: Example,
} as ComponentMeta<typeof Example>;

export const ConditionalCssClasses = () => <Example />;
