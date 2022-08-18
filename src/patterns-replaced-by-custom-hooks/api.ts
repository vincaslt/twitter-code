import { File } from './types';

// For illustrative purposes
const getRandomString = () => {
  return (Math.random() + 1).toString(36).substring(2, 7);
};

const getRandomFile = () => ({
  id: crypto.randomUUID(),
  name: `${getRandomString()}.jpg`,
  size: Math.floor(Math.random() * 100) + 1,
});

export function uploadFile() {
  return new Promise<File>((resolve) => {
    setTimeout(() => {
      resolve(getRandomFile());
    }, 1000);
  });
}

export function loadFiles() {
  return new Promise<File[]>((resolve) => {
    setTimeout(() => {
      const files: File[] = [];
      for (let i = 0; i < 10; i++) {
        files.push(getRandomFile());
      }
      resolve(files);
    }, 1000);
  });
}
