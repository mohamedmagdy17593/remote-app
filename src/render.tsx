import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

export default function renderTo(id: string) {
  createRoot(document.getElementById(id)!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
