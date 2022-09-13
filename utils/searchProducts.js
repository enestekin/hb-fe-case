const searchProducts = (products, searchText) => {
  return products.filter((product) => {
    return product.description.toLowerCase().includes(searchText.toLowerCase());
  });
};

export default searchProducts;
