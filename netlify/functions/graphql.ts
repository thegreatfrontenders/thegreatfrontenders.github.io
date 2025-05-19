import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const response = await fetch('https://onepieceql.up.railway.app/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: event.body, // 🚨 Forward the original query body
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

export { handler };
