import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

function Button({ loading, type = 'button', children, ...rest }: Props) {
  return (
    <button type={type} disabled={loading} {...rest}>
      {loading ? '...' : children}
    </button>
  );
}

function Usage() {
  return (
    <Button
      loading // Extra props from Button
    >
      Click
    </Button>
  );
}

export default Usage;
export { Button };
