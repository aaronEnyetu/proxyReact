import { useEffect } from 'react';
import { getPokemon } from './services/fetch-utils';
import './App.css';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState([]);

  useEffect(() => {
    async function doLoad() {
      const data = await getPokemon();

      
      setPokemon(data.results);
    }
    doLoad();
  }, []);
  //define handle submit function
  async function handleSubmit(e) {
    e.preventDefault();

    //use state data fron the input to find that specific pokemon
    //dump them in state

  }
  //to check state: console log pokemonQuery here

  console.log(pokemonQuery);
  return (
    <div className="App">
      <form on onSubmit={handleSubmit}>
        <input onChange={e => setPokemonQuery(e.target.value)}/>
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
