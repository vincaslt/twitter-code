import { useEffect, useState } from 'react';
import { loadFiles, uploadFile } from '../../api';
import { File } from '../../types';

interface Props {
  renderFile: (file: File) => React.ReactNode;
  renderButton: (upload: () => void) => React.ReactNode;
}

function Files({ renderButton, renderFile }: Props) {
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

  return (
    <div>
      <ul>{files.map(renderFile)}</ul>
      {renderButton(upload)}
    </div>
  );
}

export default Files;
