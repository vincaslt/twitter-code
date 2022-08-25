import { useState } from 'react';

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function StateExample() {
  const [inputText, setInputText] = useState('');
  const [user, setUser] = useState<User | null>(null);

  const handleClickParse = () => {
    const [firstName] = inputText.split(',');
    const [lastName, age] = inputText.split(':');
    setUser({
      firstName,
      lastName,
      age: Number(age),
    });
  };

  return (
    <>
      {JSON.stringify(user)}
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type: 'firstName,lastName:age'"
      />
      <button onClick={handleClickParse}>Parse</button>
    </>
  );
}

export default StateExample;
