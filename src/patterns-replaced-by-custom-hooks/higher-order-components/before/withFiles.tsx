import { useEffect, useState } from 'react';
import { loadFiles, uploadFile } from '../../api';
import { File } from '../../types';

export interface FilesProps {
  files?: File[];
  upload: () => void;
}

function withFiles<Props>(Component: React.ComponentType<Props & FilesProps>) {
  return (props: Props) => {
    const [files, setFiles] = useState<File[] | undefined>();

    useEffect(() => {
      loadFiles().then(setFiles);
    }, []);

    const upload = async () => {
      const file = await uploadFile();
      setFiles((files) => (files ? [...files, file] : [file]));
    };

    return <Component {...props} files={files} upload={upload} />;
  };
}

export default withFiles;
