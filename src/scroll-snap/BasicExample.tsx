import './style.css';

function BasicExample() {
  return (
    <div className="scrollable-container">
      <div className="section"></div>
      <div className="section section--end">scroll-snap-align: end;</div>
      <div className="section section--center">scroll-snap-align: center;</div>
      <div className="section section--start">scroll-snap-align: start;</div>
      <div className="section"></div>
    </div>
  );
}

export default BasicExample;
