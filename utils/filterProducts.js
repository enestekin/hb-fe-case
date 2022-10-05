const filterProducts = (products, filters) => {
  const filterKeys = Object.keys(filters);
  return products.filter((product) => {
    return filterKeys.every((key) => {
      if (!filters[key].length) return true;
      return filters[key].includes(product[key]);
    });
  });
};

export default filterProducts;
