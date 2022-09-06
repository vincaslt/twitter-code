import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  text: string;
  children: React.ReactNode;
}

function Tooltip({ text, children }: Props) {
  // Position of the bottom edge of the anchor element.
  // Doubles as isVisible state: null means hidden
  const [position, setPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    // Place the tooltip near the anchor's bottom edge on the screen
    const bounds = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: bounds.x,
      y: bounds.y + bounds.height,
    });
  };

  const handleMouseOut = () => setPosition(null);

  const anchorProps = {
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
  };

  // Clones the child element to remove the div wrapper around it.
  // Child node must accept or forward mouse events.
  // We can't set even handlers on text, so we wrap it with <span>.
  const anchor = React.isValidElement(children) ? (
    React.cloneElement(children, anchorProps)
  ) : (
    <span {...anchorProps}>{children}</span>
  );

  // We use react portal to render the tooltip into document.body.
  // To place it near the button, we use the position from the event.
  // The position is "fixed" so it won't be affected by overflow rules.
  return (
    <>
      {anchor}
      {position &&
        ReactDOM.createPortal(
          <div
            style={{
              top: position.y,
              left: position.x,
              position: 'fixed',
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
          </div>,
          document.body,
        )}
    </>
  );
}

export default Tooltip;
