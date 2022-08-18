import useFiles from './useFiles';

function Files() {
  const { files, upload } = useFiles();

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

export default Files;
