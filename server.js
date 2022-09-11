import express from 'express';
import productsRouter from './routes/productsRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/v1/products', productsRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}!`);
});
