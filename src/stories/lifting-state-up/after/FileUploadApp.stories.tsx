import { ComponentMeta } from '@storybook/react';

import FileUploadApp from './FileUploadApp';

export default {
  title: 'FileUpload',
  component: FileUploadApp,
} as ComponentMeta<typeof FileUploadApp>;

export const After = () => <FileUploadApp />;
