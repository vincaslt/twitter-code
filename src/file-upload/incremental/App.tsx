import { useState } from 'react';
import FileUploadInput from './FileUploadInput';
import useFileUpload from './useFileUpload';
import useFileUploadInput from './useFileUploadInput';

function App() {
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const { files, inputProps, openSelection, removeFiles } = useFileUploadInput();
  const { uploadFiles } = useFileUpload();

  const handleUploadClick = async () => {
    setLoading(true);
    try {
      const response = await uploadFiles(files);
      setResponse(response);
    } catch (e) {
      setResponse(e as string);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={openSelection}>+ Add Files</button>

      <ul>
        {files.map((file, i) => (
          <li key={i}>
            {file.name} - {file.type}{' '}
            <button onClick={() => removeFiles([file])}>-</button>
          </li>
        ))}
      </ul>

      <button onClick={handleUploadClick}>{loading ? 'Loading' : 'Upload'}</button>

      <FileUploadInput multiple {...inputProps} />

      <pre>{JSON.stringify(response, undefined, 2)}</pre>
    </div>
  );
}

export default App;
