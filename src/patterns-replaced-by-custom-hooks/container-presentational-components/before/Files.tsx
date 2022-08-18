import { File } from '../../types';

interface Props {
  files: File[];
  onUploadClick: () => void;
}

function Files({ files, onUploadClick }: Props) {
  return (
    <div>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name} ({file.size}MB)
          </li>
        ))}
      </ul>
      {files.length > 0 && <button onClick={onUploadClick}>Upload</button>}
    </div>
  );
}

export default Files;
