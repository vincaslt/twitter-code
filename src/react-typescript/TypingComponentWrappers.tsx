import { ComponentProps } from 'react';
import { Button } from './TypingElementWrappers';

interface Props extends ComponentProps<typeof Button> {
  variant?: 'primary' | 'secondary';
}

function StyledButton({ variant = 'primary', ...rest }: Props) {
  return (
    <Button
      style={{
        backgroundColor: variant === 'primary' ? 'darkgray' : 'ghostwhite',
      }}
      {...rest}
    />
  );
}

function Usage() {
  return (
    <>
      <StyledButton
        loading // Extra props from Button
      >
        Primary Button
      </StyledButton>
      <StyledButton
        variant="secondary" // Extra props from StyledButton
        onClick={() => {
          /* Extra props from button element  */
        }}
      >
        Secondary Button
      </StyledButton>
    </>
  );
}

export default Usage;
