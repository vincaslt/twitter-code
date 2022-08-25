import { useRef } from 'react';

function RefsExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClickFocus}>Focus Input</button>
    </>
  );
}

export default RefsExample;
