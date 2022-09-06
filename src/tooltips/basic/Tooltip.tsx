import React, { useState } from 'react';

interface Props {
  text: string;
  children: React.ReactNode;
}

function Tooltip({ text, children }: Props) {
  const [isVisible, setVisible] = useState(false);

  const handleMouseOver = () => setVisible(true);
  const handleMouseOut = () => setVisible(false);

  return (
    <div
      style={{ position: 'relative' }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
      {isVisible && (
        <div
          style={{
            top: '100%',
            left: 0,
            position: 'absolute',
            paddingTop: 5,
            zIndex: 10,
          }}
        >
          <div
            style={{
              background: 'black',
              color: 'white',
            }}
          >
            {text}
          </div>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
