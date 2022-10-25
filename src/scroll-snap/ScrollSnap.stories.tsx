import { ComponentMeta } from '@storybook/react';

import BasicExample from './BasicExample';
export default {
  title: 'Scroll Snap',
  component: BasicExample,
} as ComponentMeta<typeof BasicExample>;

export const ScrollSnapExample = () => <BasicExample />;
