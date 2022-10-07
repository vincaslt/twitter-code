import { ChangeEvent, useRef, useState } from 'react';

function useFileUploadInput() {
  const ref = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const addFiles = (added: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...added]);
  };

  const removeFiles = (files: File[]) => {
    setFiles((prevFiles) => prevFiles.filter((file) => !files.includes(file)));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const added = e.target.files;

    if (added) {
      addFiles([...added]);
    }
  };

  const openSelection = () => {
    // Redirect the click event onto the hidden input element
    ref.current?.click();
  };

  return {
    files,
    openSelection,
    addFiles,
    removeFiles,
    inputProps: {
      onChange,
      ref,
    },
  };
}

export default useFileUploadInput;
