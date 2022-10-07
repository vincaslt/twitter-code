function useFileUpload(url = 'https://httpbin.org/post') {
  const uploadFiles = async (files: File[]) => {
    if (!files.length) {
      return;
    }

    // 👇 Create new FormData object and append files
    const data = new FormData();
    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });

    // 👇 Uploading the files using the fetch API to the server
    return fetch(url, {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };

  return { uploadFiles };
}

export default useFileUpload;
