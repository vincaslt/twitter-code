import { useState } from 'react';
import { uploadFile } from '../api';
import { File } from '../types';
import Files from './Files';
import Header from './Header';

function FileUploadApp() {
  const [files, setFiles] = useState<File[]>([]);

  const upload = async () => {
    const file = await uploadFile();
    setFiles((files) => [...files, file]);
  };

  return (
    <div>
      <Header onUploadClick={upload} />
      <Files onUploadClick={upload} files={files} />
    </div>
  );
}

export default FileUploadApp;
