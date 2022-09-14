import { ComponentMeta } from '@storybook/react';
import Example from './Example';

export default {
  title: 'Array to object',
  component: Example,
} as ComponentMeta<typeof Example>;

export const ArrayToObject = () => <Example />;
