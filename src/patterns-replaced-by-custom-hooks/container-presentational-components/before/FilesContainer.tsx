import { useEffect, useState } from 'react';
import { loadFiles, uploadFile } from '../../api';
import { File } from '../../types';
import Files from './Files';

function FilesContainer() {
  const [files, setFiles] = useState<File[] | undefined>();

  useEffect(() => {
    loadFiles().then(setFiles);
  }, []);

  const upload = async () => {
    const file = await uploadFile();
    setFiles((files) => (files ? [...files, file] : [file]));
  };

  if (!files) {
    return <div>Loading...</div>;
  }

  return <Files files={files} onUploadClick={upload} />;
}

export default FilesContainer;
