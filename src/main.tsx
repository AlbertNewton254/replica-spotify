import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main-content.css';
import './styles/media-queries.css';
import './styles/reset.css';
import './styles/sidebar-footer.css';
import './styles/vars.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
