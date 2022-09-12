import { ComponentMeta } from '@storybook/react';
import RedirectExample from './RedirectExample';
import RedirectReactRouterExample from './ReactRouterExample';

export default {
  title: 'Redirect to URL',
  component: RedirectExample,
} as ComponentMeta<typeof RedirectExample>;

export const ExternalRedirect = () => <RedirectExample />;
export const ReactRouterRedirect = () => <RedirectReactRouterExample />;
