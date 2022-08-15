import { File } from './types';

// For illustrative purposes
const getRandomString = () => {
  return (Math.random() + 1).toString(36).substring(2, 7);
};

export function uploadFile() {
  return new Promise<File>((resolve) => {
    setTimeout(() => {
      resolve({
        id: crypto.randomUUID(),
        name: `${getRandomString()}.jpg`,
        size: Math.floor(Math.random() * 100) + 1,
      });
    }, 1000);
  });
}
