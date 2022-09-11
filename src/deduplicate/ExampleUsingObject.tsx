import { useState } from 'react';
import { arrayOfObjects } from './initialData';

// 👇 Deduplicates array of object values. Determines uniqueness by comparing keys
function deduplicate<T>(array: T[], getKey: (item: T) => string | number) {
  const seenItems: Record<string, boolean> = {};
  return array.filter((item) => {
    const key = getKey(item);
    if (seenItems[key]) {
      return false;
    }
    seenItems[key] = true;
    return true;
  });
}

function ExampleUsingObject() {
  const [items, setItems] = useState(arrayOfObjects);

  const handleClickDeduplicate = () => {
    setItems((items) => deduplicate(items, (item) => item.id));
  };

  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.value}</li>
        ))}
      </ul>
      <button onClick={handleClickDeduplicate}>Deduplicate</button>
    </div>
  );
}

export default ExampleUsingObject;
