// export async function getPokemon() {
//     const data = await client.from('pokemon').select('*')
//     return data.body;
// }
export async function getPokemon(filter) {
  const rawData = await fetch(`http://localhost:8888/.netlify/functions/pokemon?pokeQuery=${filter}`);
  const data = await rawData.json();


  return data;
}


export async function getYelp(filter) {
    //eslint-disable-next-line
  console.log('your filter in getYelp', filter);
  const rawData = await fetch(`http://localhost:8888/.netlify/functions/yelp?yelpQuery=${filter}`);
  const data = await rawData.json();
  
  return data;
}