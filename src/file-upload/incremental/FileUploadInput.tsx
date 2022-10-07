import { forwardRef, InputHTMLAttributes } from 'react';

const FileUploadInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input type="file" ref={ref} style={{ display: 'none' }} {...props} />;
});

export default FileUploadInput;
