export default function Header() {
  return (
    <header className="header">
      <h1>Migrante Guía</h1>
      <button onClick={() => window.location.href = '/apoyo-emocional'}>
        Empieza tu guía
      </button>
    </header>
  );
}
