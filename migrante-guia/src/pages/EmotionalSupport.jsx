import { useState } from 'react';

export default function EmotionalSupport() {
  const [result, setResult] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setResult('Gracias por completar el chequeo. Visita nuestros recursos de bienestar.');
  }

  return (
    <div className="support">
      <h2>Chequeo de Bienestar Diario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ¿Cómo te sientes hoy?
          <select required>
            <option value="bien">Bien</option>
            <option value="triste">Triste</option>
            <option value="estresado">Estresado</option>
          </select>
        </label>
        <button type="submit">Enviar</button>
      </form>
      {result && <p className="result">{result}</p>}
      <p className="disclaimer">Esto no sustituye ayuda profesional.</p>
    </div>
  );
}
