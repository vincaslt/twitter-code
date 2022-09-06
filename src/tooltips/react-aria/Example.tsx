import Tooltip from './Tooltip';

function Example() {
  return (
    <div style={{ height: 35, overflow: 'hidden', border: '1px dashed gray' }}>
      <Tooltip text="Clicky clicky" delay={0}>
        <button>Button</button>
      </Tooltip>
    </div>
  );
}

export default Example;
