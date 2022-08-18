interface Props {
  children: React.ReactNode;
  button: React.ReactNode;
  isLoading: boolean;
}

function Files({ isLoading, children, button }: Props) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>{children}</ul>
      {button}
    </div>
  );
}

export default Files;
