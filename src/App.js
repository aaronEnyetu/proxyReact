import { useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';
import './App.css';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function doLoad() {
      const data = await getPokemon();

      console.log(data);
      setPokemon(data);
    }
    doLoad();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
