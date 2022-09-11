import { useState } from 'react';
import { arrayOfStrings } from './initialData';

// 👇 Deduplicates an array of primitive values
function deduplicate<T>(array: T[]) {
  return Array.from(new Set(array).values());
}

function ExampleUsingSet() {
  const [items, setItems] = useState(arrayOfStrings);

  const handleClickDeduplicate = () => {
    setItems((items) => deduplicate(items));
  };

  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClickDeduplicate}>Deduplicate</button>
    </div>
  );
}

export default ExampleUsingSet;
