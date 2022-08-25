import { forwardRef, useRef } from 'react';

interface Props {
  label: string;
}

const InputWithForwardRef = forwardRef<HTMLInputElement, Props>(({ label }, ref) => {
  return (
    <label>
      {label}
      <input type="text" ref={ref} />
    </label>
  );
});

function Usage() {
  const inputRef = useRef<HTMLInputElement>(null);

  return <InputWithForwardRef label="Custom property" ref={inputRef} />;
}

export default Usage;
