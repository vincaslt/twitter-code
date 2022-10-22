import { ComponentMeta } from '@storybook/react';

import Basic from './Example';

export default {
  title: 'Native color picker',
  component: Basic,
} as ComponentMeta<typeof Basic>;

export const NativeExample = () => <Basic />;
