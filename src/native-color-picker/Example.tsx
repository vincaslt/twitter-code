import { ChangeEvent, useState } from 'react';

function NativeColorPicker() {
  const [color, setColor] = useState('#000000');

  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <p style={{ color }}>Selected: {color}</p>
      <input type="color" value={color} onChange={handleChangeColor} />
    </div>
  );
}

export default NativeColorPicker;
