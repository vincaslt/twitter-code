import { ComponentMeta } from '@storybook/react';

import ExampleWithPortals from './with-portals/Example';
import ExampleBasicTooltip from './basic/Example';
import ExampleWithReactAria from './react-aria/Example';

export default {
  title: 'Tooltips',
  component: ExampleBasicTooltip,
} as ComponentMeta<typeof ExampleBasicTooltip>;

export const Basic = () => <ExampleBasicTooltip />;
export const WithPortals = () => <ExampleWithPortals />;
export const WithReactAria = () => <ExampleWithReactAria />;
