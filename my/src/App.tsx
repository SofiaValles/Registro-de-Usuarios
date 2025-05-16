import React, { useState } from 'react';
import './App.css';

function Pokemon() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  const handleSearch = async () => {
    setError('');
    setPokemonData(null);
    if (!pokemonName) return;
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        setError('Pokémon no encontrado');
        return;
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (err) {
      setError('Error al buscar el Pokémon');
    }
  };

  return (
    <div className="pokemon-container">
      <h1>Busca un Pokémon</h1>
      <input
        type="text"
        value={pokemonName}
        onChange={handleChange}
        placeholder="Ejemplo: Eevee"
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pokemonData && (
        <div className="pokemon-info">
          <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p><strong>Tipo:</strong> {pokemonData.types.map((t: any) => t.type.name).join(', ')}</p>
          <p><strong>Habilidades:</strong> {pokemonData.abilities.map((a: any) => a.ability.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Pokemon;