import { useEffect, useState } from 'react';
import { loadFiles, uploadFile } from '../../api';
import { File } from '../../types';

function useFiles() {
  const [files, setFiles] = useState<File[] | undefined>();

  useEffect(() => {
    loadFiles().then(setFiles);
  }, []);

  const upload = async () => {
    const file = await uploadFile();
    setFiles((files) => (files ? [...files, file] : [file]));
  };

  return { files, upload };
}

export default useFiles;
