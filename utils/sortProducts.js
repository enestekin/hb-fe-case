const sortProducts = (products, sortBy) => {
  if (sortBy === 'asc') {
    return products.sort((a, b) => a.discountedPrice - b.discountedPrice);
  }
  if (sortBy === 'desc') {
    return products.sort((a, b) => b.discountedPrice - a.discountedPrice);
  }
  if (sortBy === 'newestaz') {
    return products.sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === 'newestza') {
    return products.sort((a, b) => b.description.localeCompare(a.description));
  }
  return products;
};

export default sortProducts;
