import { useCallback, useRef, useState } from 'react';
import useResizeObserver from './useResizeObserver';

function useOverflow<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const onResize = useCallback(() => {
    const element = ref.current;
    if (element) {
      setIsOverflowing(element.scrollHeight > element.clientHeight);
    }
  }, []);

  useResizeObserver(ref, onResize);

  return [ref, isOverflowing] as const;
}

export default useOverflow;
