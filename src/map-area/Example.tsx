import { useState } from 'react';
import productsSrc from './products.jpg';

function MapAreaExample() {
  const [selected, setSelected] = useState('');

  const handleClick = (product: string) => () => {
    setSelected(product);
  };

  return (
    <>
      <img src={productsSrc} alt="Workplace" useMap="#products-map" width="500" />

      {/* 👇 Use name matching the useMap attribute */}
      <map name="products-map">
        {/* 👇 Define the clickable area */}
        <area
          shape="poly"
          coords="87,219,287,70,460,73,417,122,464,143,291,333"
          title="Computer"
          style={{ cursor: 'pointer' }}
          onClick={handleClick('Computer')}
        />
        <area
          shape="poly"
          coords="11,279,72,236,200,308,137,360"
          title="Phone"
          style={{ cursor: 'pointer' }}
          onClick={handleClick('Phone')}
        />
        <area
          shape="poly"
          coords="229,305,260,322,257,335,225,378,203,389,177,372,183,335,214,306"
          title="Watch"
          style={{ cursor: 'pointer' }}
          onClick={handleClick('Watch')}
        />
      </map>
      <div>Selected: {selected ?? 'Click on a product'}</div>
    </>
  );
}

export default MapAreaExample;
