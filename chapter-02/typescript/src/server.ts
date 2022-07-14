import express from 'express';

const app = express();

app.get('/api/', (request, response) => {
  return response.json({ message: 'Hello World' });
})

app.listen(3333);