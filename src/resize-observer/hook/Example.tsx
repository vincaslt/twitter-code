import './style.css';
import useOverflow from './useOverflow';

function Example() {
  const [containerRef, isOverflowing] = useOverflow<HTMLDivElement>();

  return (
    <>
      <div
        ref={containerRef}
        style={{
          padding: 20,
          background: isOverflowing ? '#770000' : '#000055',
          height: '100vh',
          overflowY: 'scroll',
        }}
      >
        <div
          style={{
            height: '200px',
            width: '100%',
            border: '2px dashed yellow',
            color: 'white',
            padding: 10,
          }}
        />
      </div>
    </>
  );
}

export default Example;
