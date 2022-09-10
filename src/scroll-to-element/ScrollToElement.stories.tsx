import { ComponentMeta } from '@storybook/react';

import BasicExample from './BasicExample';
import NewElementExample from './NewElementExample';

export default {
  title: 'Scroll to element',
  component: BasicExample,
} as ComponentMeta<typeof BasicExample>;

export const ScrollToElementBasicExample = () => <BasicExample />;
export const ScrollToNewElementExample = () => <NewElementExample />;
