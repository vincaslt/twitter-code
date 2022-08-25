import { useEffect, useMemo, useState } from 'react';
import throttle from './throttle';

type Range = 'small' | 'medium' | 'large';

const sizeToRange = (size: number): Range => {
  if (size < 600) {
    return 'small';
  } else if (size > 1200) {
    return 'large';
  }
  return 'medium';
};

function ThrottleExample() {
  const [range, setRange] = useState(sizeToRange(window.innerWidth));

  const handleWindowResize = useMemo(
    () =>
      throttle(() => {
        // Execute some expensive operation
        setRange(sizeToRange(window.innerWidth));
      }, 100),
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  return <div>Screen size (resize to see): {range}</div>;
}

export default ThrottleExample;
