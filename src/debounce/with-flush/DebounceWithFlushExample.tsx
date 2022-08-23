import { ChangeEvent, useMemo, useState } from 'react';
import debounce from './debounce';

function DebounceWithFlushExample() {
  const [text, setText] = useState('');

  const handleChangeText = useMemo(
    () =>
      debounce((e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
      }, 5000),
    [],
  );

  return (
    <div>
      <div>Text (5 second): {text}</div>
      <input type="text" onChange={handleChangeText} />
      <button onClick={handleChangeText.flush}>Flush</button>
    </div>
  );
}

export default DebounceWithFlushExample;
