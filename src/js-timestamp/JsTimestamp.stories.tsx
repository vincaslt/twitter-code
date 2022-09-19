import { ComponentMeta } from '@storybook/react';

import Example from './Example';

export default {
  title: 'JS Timestamp',
  component: Example,
} as ComponentMeta<typeof Example>;

export const JsTimestamp = () => <Example />;
