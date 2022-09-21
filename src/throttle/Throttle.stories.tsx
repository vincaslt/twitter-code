import { ComponentMeta } from '@storybook/react';
import ThrottleExample from './ThrottleExampleHook';

export default {
  title: 'Throttle',
  component: ThrottleExample,
} as ComponentMeta<typeof ThrottleExample>;

export const Throttle = () => <ThrottleExample />;
