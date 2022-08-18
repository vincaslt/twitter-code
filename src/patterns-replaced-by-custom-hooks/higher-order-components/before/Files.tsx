import withFiles, { FilesProps } from './withFiles';

function Files({ files, upload }: FilesProps) {
  if (!files) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name} ({file.size}MB)
          </li>
        ))}
      </ul>
      {files.length > 0 && <button onClick={upload}>Upload</button>}
    </div>
  );
}

export default withFiles(Files);
