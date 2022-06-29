const fetch = require('node-fetch');
require('dotenv').config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

//eslint-disable-next-line
exports.handler = async (event, context) => {
  try {
// eslint-disable-next-line
    console.log('query params', event.
      queryStringParameters);
      //fetch is how we make requests in node
    const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${event.queryStringParameters.pokeQuery}`);
    const data = await response.json();
    const json = JSON.stringify(data);
    //eslint-disable-next-line
    console.log(response);
    return { 
      statusCode: 200, 
      headers,
      body: json
    };
  } catch (error) {
    //eslint-disable-next-line
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
