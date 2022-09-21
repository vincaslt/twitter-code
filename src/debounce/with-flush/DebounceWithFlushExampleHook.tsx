import { ChangeEvent, useState } from 'react';
import useDebounce from './useDebounce';

function DebounceWithFlushExample() {
  const [text, setText] = useState('');

  const handleChangeText = useDebounce(
    (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    5000,
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
