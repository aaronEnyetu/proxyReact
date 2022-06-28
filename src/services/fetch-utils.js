// export async function getPokemon() {
//     const data = await client.from('pokemon').select('*')
//     return data.body;
// }
export async function getPokemon() {
  const rawData = await fetch('http://localhost:8888/.netlify/functions/pokemon');
  const data = await rawData.json();


  return data;
}