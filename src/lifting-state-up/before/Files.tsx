import { useState } from 'react';
import { uploadFile } from '../api';
import { File } from '../types';

function Files() {
  const [files, setFiles] = useState<File[]>([]);

  const upload = async () => {
    const file = await uploadFile();
    setFiles((files) => [...files, file]);
  };

  return (
    <div>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name} ({file.size}MB)
          </li>
        ))}
      </ul>
      <button onClick={upload}>Upload</button>
    </div>
  );
}

export default Files;
