const filterProducts = (products, filters) => {
  const filterKeys = Object.keys(filters);
  return products.filter((product) => {
    return filterKeys.every((key) => {
      if (!filters[key].length) return true;

      if (Array.isArray(product[key])) {
        return product[key].some((keyEle) => filters[key].includes(keyEle));
      }
      return filters[key].includes(product[key]);
    });
  });
};

export default filterProducts;
