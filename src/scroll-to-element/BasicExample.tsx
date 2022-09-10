import './style.css';

function BasicExample() {
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="hero-section">
        <button className="btn-scroll" onClick={handleClickScroll}>
          Scroll Down
        </button>
      </div>
      <div id="section-1">Section 1</div>
    </>
  );
}

export default BasicExample;
