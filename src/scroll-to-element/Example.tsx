import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { v4 as uuid } from 'uuid';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import './style.css';

type Person = {
  id: string;
  name: string;
};

function Example() {
  const listRef = useRef<HTMLUListElement | null>(null);
  const [people, setPeople] = useState<Person[]>([]);

  const handleAddClick = () => {
    flushSync(() => {
      setPeople((people) => [
        ...people,
        {
          id: uuid(),
          name: uniqueNamesGenerator({
            dictionaries: [names],
          }),
        },
      ]);
    });

    // 👇 Scroll to the last element in the list
    listRef.current?.lastElementChild?.scrollIntoView();
  };

  return (
    <>
      <ul className="list" ref={listRef}>
        {people.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
      <button onClick={handleAddClick}>Add new person</button>
    </>
  );
}

export default Example;
