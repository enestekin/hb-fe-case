const filters = (products, filterOption) => {
  let filters = {};

  products.forEach((product) => {
    if (filters[product[filterOption]]) {
      filters = {
        ...filters,
        [product[filterOption]]: filters[product[filterOption]] + 1,
      };
    } else {
      filters = { ...filters, [product[filterOption]]: 1 };
    }
  });

  const filtersArray = Object.keys(filters).map((key) => ({
    [filterOption]: key,
    quantity: filters[key],
  }));

  return filtersArray;
};

export default filters;
