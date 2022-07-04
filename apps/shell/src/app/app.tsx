import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Shop = React.lazy(() => import('shop/Module'));

const Blog = React.lazy(() => import('blog/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/shop">Shop</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/blog" element={<Blog />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
