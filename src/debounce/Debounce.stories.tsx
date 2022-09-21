import { ComponentMeta } from '@storybook/react';

import BasicDebounceExample from './basic/BasicDebounceExample';
import DebounceWithFlushExample from './with-flush/DebounceWithFlushExampleHook';

export default {
  title: 'Debounce',
  component: BasicDebounceExample,
} as ComponentMeta<typeof BasicDebounceExample>;

export const BasicDebounce = () => <BasicDebounceExample />;
export const DebounceWithFlush = () => <DebounceWithFlushExample />;
