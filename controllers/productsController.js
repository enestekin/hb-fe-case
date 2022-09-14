import axios from 'axios';
import filterGenerator from '../utils/filterGenerator.js';
import filterProducts from '../utils/filterProducts.js';
import sortProducts from '../utils/sortProducts.js';
import searchProducts from '../utils/searchProducts.js';

const PRODUCT_PER_PAGE = 12;

const getProducts = async (req, res) => {
  const { brand, color, sort, search, page } = req.query;
  try {
    const { data } = await axios('https://hb-mock-data.herokuapp.com/products');
    let products = data;

    const filterOptions = {
      color: color ? color.split(',') : [],
      brand: brand ? brand.split(',') : [],
    };

    const colorFilters = filterGenerator(data, 'color');
    const brandFilters = filterGenerator(data, 'brand');

    products = filterProducts(products, filterOptions);
    products = sortProducts(products, sort);
    search && (products = searchProducts(products, search));

    const start = (page - 1) * PRODUCT_PER_PAGE;
    const end = page * PRODUCT_PER_PAGE;
    const numOfPages = Math.ceil(products.length / PRODUCT_PER_PAGE);
    products = products.slice(start, end);

    res.status(200).json({
      products,
      colorOptions: colorFilters,
      brandOptions: brandFilters,
      numOfPages,
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
