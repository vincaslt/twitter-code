import { ChangeEvent, useRef, useState } from 'react';

function CustomFileInput() {
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);

    // 🚩 do the file upload here normally...
  };

  return (
    <div>
      <div>Upload a file:</div>

      {/* 👇 Our custom button to select and upload a file */}
      <button onClick={handleUploadClick}>
        {file ? `${file.name}` : 'Click to select'}
      </button>

      {/* 👇 Notice the `display: hidden` on the input */}
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </div>
  );
}

export default CustomFileInput;
