import Files from './Files';
import useFiles from './useFiles';

function FileUploadApp() {
  const { files, upload } = useFiles();

  return (
    <div>
      <h1>Cloud Drive</h1>
      <Files isLoading={!files} button={<button onClick={upload}>Upload</button>}>
        {files?.map((file) => (
          <li key={file.id}>
            {file.name} ({file.size}MB)
          </li>
        ))}
      </Files>
    </div>
  );
}

export default FileUploadApp;
