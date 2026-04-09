import { lazy, Suspense } from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';

const LazyPage1 = lazy(() => import('../pages/LazyPage1'));
const LazyPage2 = lazy(() => import('../pages/LazyPage2'));
const LazyPage3 = lazy(() => import('../pages/LazyPage3'));

export const Navigation = () => {
  return (
    <>
      <h2>LazyLayout Pages</h2>
      <ul>
        <li>
          <Link to="/lazyload/lazy1">Lazy Page 1</Link>
        </li>
        <li>
          <Link to="/lazyload/lazy2">Lazy Page 2</Link>
        </li>
        <li>
          <Link to="/lazyload/lazy3">Lazy Page 3</Link>
        </li>
      </ul>
      <Suspense fallback={<span>Loading page...</span>}>
        <Routes>
          <Route path="lazy1" element={<LazyPage1 />} />
          <Route path="lazy2" element={<LazyPage2 />} />
          <Route path="lazy3" element={<LazyPage3 />} />
          <Route index element={<Navigate to="lazy1" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};
