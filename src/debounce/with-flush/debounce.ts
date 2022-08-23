function debounce<Args extends unknown[]>(fn: (...args: Args) => void, delay: number) {
  let timeoutID: number | undefined;
  let lastArgs: Args | undefined;

  const run = () => {
    if (lastArgs) {
      fn(...lastArgs);
      lastArgs = undefined;
    }
  };

  const debounced = (...args: Args) => {
    clearTimeout(timeoutID);
    lastArgs = args;
    timeoutID = window.setTimeout(run, delay);
  };

  debounced.flush = () => {
    clearTimeout(timeoutID);
    run();
  };

  return debounced;
}

export default debounce;
