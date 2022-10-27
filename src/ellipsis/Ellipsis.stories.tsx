import { ComponentMeta } from '@storybook/react';

import SingleLine from './single-line/Example';
import MultiLine from './multi-line/Example';

export default {
  title: 'Ellipsis',
  component: SingleLine,
} as ComponentMeta<typeof SingleLine>;

export const SingleLineExample = () => <SingleLine />;
export const MultiLineExample = () => <MultiLine />;
