import { ChangeEvent, useMemo, useState } from 'react';
import debounce from '../with-flush/debounce';

function BasicDebounceExample() {
  const [text, setText] = useState('');

  const handleChangeText = useMemo(
    () =>
      debounce((e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
      }, 1000),
    [],
  );

  return (
    <div>
      <div>Text (1 second): {text}</div>
      <input type="text" onChange={handleChangeText} />
    </div>
  );
}

export default BasicDebounceExample;
