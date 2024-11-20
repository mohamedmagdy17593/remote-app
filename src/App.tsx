import './index.css';

import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

export default function App() {
  return (
    <HashRouter basename="/remote-app">
      <Nav />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
