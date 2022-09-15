import express from 'express';
import productsRouter from './routes/productsRoutes.js';
import basketRouter from './routes/basketRoutes.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json());
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/basket', basketRouter);

app.get('*', (req, res) => {
  res.seendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}!`);
});
