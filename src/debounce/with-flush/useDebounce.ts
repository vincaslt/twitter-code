import { DependencyList, useMemo } from 'react';
import debounce from './debounce';

function useDebounce<Args extends unknown[]>(
  cb: (...args: Args) => void,
  delay: number,
  deps: DependencyList,
) {
  return useMemo(() => debounce(cb, delay), deps);
}

export default useDebounce;
