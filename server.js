import express from 'express';
import productsRouter from './routes/productsRoutes.js';
import basketRouter from './routes/basketRoutes.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/products', productsRouter);
app.use('/api/v1/basket', basketRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}!`);
});
