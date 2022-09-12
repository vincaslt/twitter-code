import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

function RedirectReactRouterExample() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

function About() {
  return <div>About</div>;
}

function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // 👇 Redirects to about page, note the `replace: true`
      navigate('/about', { replace: true });
    }, 3000);
  }, []);

  return <div>Redirecting...</div>;
}

export default RedirectReactRouterExample;
