import Files from './Files';
import useFiles from './useFiles';

function FileUploadApp() {
  const { files, upload } = useFiles();

  return (
    <div>
      <h1>Cloud Drive</h1>
      {files ? <Files files={files} onUploadClick={upload} /> : <div>Loading...</div>}
    </div>
  );
}

export default FileUploadApp;
