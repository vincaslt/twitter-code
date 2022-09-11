import { ComponentMeta } from '@storybook/react';
import ExampleUsingObject from './ExampleUsingObject';
import ExampleUsingSet from './ExampleUsingSet';

export default {
  title: 'Deduplicate',
  component: ExampleUsingSet,
} as ComponentMeta<typeof ExampleUsingSet>;

export const UsingSet = () => <ExampleUsingSet />;
export const UsingFilter = () => <ExampleUsingObject />;
