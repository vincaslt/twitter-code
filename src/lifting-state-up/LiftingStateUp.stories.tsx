import { ComponentMeta } from '@storybook/react';

import FileUploadAppAfter from './after/FileUploadApp';
import FileUploadAppBefore from './before/FileUploadApp';

export default {
  title: 'Lifting State Up',
  component: FileUploadAppBefore,
} as ComponentMeta<typeof FileUploadAppBefore>;

export const Before = () => <FileUploadAppBefore />;
export const After = () => <FileUploadAppAfter />;
