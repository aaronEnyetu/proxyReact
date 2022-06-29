import { useState } from 'react';
import './App.css';
import { getYelp } from './services/fetch-utils';
import PokeSearch from './PokeSearch';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState([]);



  async function fetchAndStoreYelp() {
    const data = await getYelp(yelpQuery);

    setBusinesses(data.businesses);
  }

  async function handleYelpSubmit(e) {
    e.preventDefault();


    // use state data from the input to find that specific pokemon
    await fetchAndStoreYelp();

    setYelpQuery('');
  }


  return (
    <div className="App">
      <PokeSearch />

      <div className='yelp-search'>
        <form onSubmit={handleYelpSubmit}>
          <input onChange={e => setYelpQuery(e.target.value)} />
          <button>Search</button>
        </form>
        {
          businesses.map((business, i) => <div key={business.name + i} className="business">
            <p>{business.name}</p>
          </div>)
        }
      </div>
    </div>
  );
}

export default App;