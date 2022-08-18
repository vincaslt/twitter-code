import Files from './Files';

function FileUploadApp() {
  return (
    <div>
      <h1>Cloud Drive</h1>
      <Files
        renderButton={(upload) => <button onClick={upload}>Upload</button>}
        renderFile={(file) => (
          <li key={file.id}>
            {file.name} ({file.size}MB)
          </li>
        )}
      />
    </div>
  );
}

export default FileUploadApp;
