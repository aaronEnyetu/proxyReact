import { useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';
import './App.css';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function doLoad() {
      const data = await getPokemon();

      
      setPokemon(data.results);
    }
    doLoad();
  }, []);
  return (
    <div className="App">
      <form>
        <input />
        <button>Search</button>
      </form>
      <header className="App-header">
        {
          pokemon.map((poke, i) => <div
            key={poke.pokemon + i}
            className="pokemon">
            <p>{poke.pokemon}</p>
            <img src={poke.url_image} />
          </div>)
        }
        
      </header>
    </div>
  );
}

export default App;
