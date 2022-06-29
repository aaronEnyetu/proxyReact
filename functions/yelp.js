// require is how we import things in node
const fetch = require('node-fetch');
require('dotenv').config();

// this line tells chrome to ignore CORS policy just in case
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};


// exports. is how we export stuff in node
// TO ALL DEVS: if you hit this endpoint, don't forget to supply a pokeQuery as a query parameter
//eslint-disable-next-line
exports.handler = async (event, context) => {
  try {
    // fetch is how we make requests in node
    const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${event.queryStringParameters.yelpQuery}`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_KEY}`,
      }
    });
    const data = await response.json();
    const json = JSON.stringify(data);
  
    return { 
      statusCode: 200, 
      headers,
      // here in the body property of the return value
      // this is what the endpoint will RESPOND with
      body: json
    };
  } catch (error) {
    // in the event of an error . . .
    // and log it to the console
    //eslint-disable-next-line
    console.log(error);
    return {
      statusCode: 500,
      // we'll send back a vagues error
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};