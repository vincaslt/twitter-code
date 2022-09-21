import { DependencyList, useMemo } from 'react';
import throttle from './throttle';

function useThrottle<Args extends unknown[]>(
  cb: (...args: Args) => void,
  cooldown: number,
  deps: DependencyList,
) {
  return useMemo(() => throttle(cb, cooldown), deps);
}

export default useThrottle;
