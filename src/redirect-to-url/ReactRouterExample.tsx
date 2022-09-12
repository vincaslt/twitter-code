import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<RedirectReactRouterExample />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

function About() {
  return <div>About</div>;
}

function RedirectReactRouterExample() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/about', { replace: true });
  }, []);

  return <div>Redirecting...</div>;
}

export default App;
