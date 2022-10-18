import { RefObject, useLayoutEffect } from 'react';

function useResizeObserver<T extends HTMLElement>(
  ref: RefObject<T> | null,
  callback: (target: T) => void,
) {
  useLayoutEffect(() => {
    const element = ref?.current;

    if (!element) {
      return;
    }

    const observer = new ResizeObserver(() => {
      callback(element);
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [callback, ref]);
}

export default useResizeObserver;
