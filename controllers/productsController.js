import axios from 'axios';

const getProducts = async (req, res) => {
  const { data } = await axios('https://hb-mock-data.herokuapp.com/products');

  try {
    res.status(200).json({
      products: data,
    });
  } catch (error) {
    let message =
      typeof error.response !== 'undefined'
        ? error.response.data.message
        : error.message;
    res.status(500).json(message);
  }
};

export { getProducts };
