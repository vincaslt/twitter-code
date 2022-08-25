/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  MouseEvent,
  MouseEventHandler,
} from 'react';

function EventHandlersExample() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // handle the event
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    // handle the event
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    // handle the event
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" onChange={handleChangeInput} />
      <button onClick={handleClick}>Button</button>
    </form>
  );
}

function EventHandlersExampleAlternative() {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    // handle the event
  };

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    // handle the event
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    // handle the event
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" onChange={handleChangeInput} />
      <button onClick={handleClick}>Button</button>
    </form>
  );
}

export default EventHandlersExample;
export { EventHandlersExampleAlternative };
