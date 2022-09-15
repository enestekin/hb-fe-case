export const isProductInBasket = (productId, basket) => {
  return basket.find((item) => item.id === productId);
};
