import { ComponentMeta } from '@storybook/react';
import FileUploadSingle from './ExampleSingle';
import FileUploadMultiple from './ExampleMultiple';
import IncrementalFileInput from './incremental/App';
import CustomFileInput from './CustomFileInput';

export default {
  title: 'File upload',
  component: FileUploadSingle,
} as ComponentMeta<typeof FileUploadSingle>;

export const SingleFileUpload = () => <FileUploadSingle />;
export const MultiFileUpload = () => <FileUploadMultiple />;
export const CustomFileUploadInput = () => <CustomFileInput />;
export const IncrementalFileUploadInput = () => <IncrementalFileInput />;
