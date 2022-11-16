import './style.css';

function Example() {
  return (
    <>
      <div id="section-1" className="section section1">
        <a href="#section-2">scroll to next section</a>
      </div>
      <div id="section-2" className="section section2">
        <a href="#section-1">scroll to previous section</a>
      </div>
    </>
  );
}

export default Example;
