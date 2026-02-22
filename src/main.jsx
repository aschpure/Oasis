import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="page">
      <header className="hero">
        <p className="tag">Welcome to</p>
        <h1>Oasis</h1>
        <p className="subtitle">A calm digital space for your next build.</p>
      </header>

      <section className="gallery" aria-label="Oasis image gallery">
        <img src="/images/OASIS IMAGE 1.png" alt="Oasis visual 1" />
        <img src="/images/OASIS FACE IMAGE.png" alt="Oasis face visual" />
        <img src="/images/OASIS IMAGE 2.png" alt="Oasis visual 2" />
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
