import { ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import RedirectExample from './RedirectExample';
import RedirectReactRouterExample from './ReactRouterExample';

export default {
  title: 'Redirect to URL',
  component: RedirectExample,
  decorators: [withRouter],
} as ComponentMeta<typeof RedirectExample>;

export const ExternalRedirect = () => <RedirectExample />;
export const ReactRouterRedirect = () => <RedirectReactRouterExample />;
ReactRouterRedirect.story = {
  parameters: {
    reactRouter: {
      routePath: '/*',
    },
  },
};
