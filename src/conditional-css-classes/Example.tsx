import { useState } from 'react';
import classNames from './classNames';
import './style.css';

function Example() {
  const [isSelected, setSelected] = useState(false);

  return (
    <button
      className={classNames('bordered accent', isSelected && 'selected')}
      onClick={() => setSelected(!isSelected)}
    >
      Click Me
    </button>
  );
}

export default Example;
