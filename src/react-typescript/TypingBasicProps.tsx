import { ReactNode } from 'react';

interface Props {
  title?: string;
  children: ReactNode;
}

function Note({ title = 'Untitled', children }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

function Usage() {
  return (
    <>
      <Note title="Note Title">
        <p>Note content</p>
      </Note>

      <Note>Untitled content</Note>
    </>
  );
}

export default Usage;
