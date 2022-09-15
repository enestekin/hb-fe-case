import { isProductInBasket } from '../utils/isProductInBasket';

test('should return true when product is in basket', () => {
  const product = { id: 1, name: 'product 1' };
  const basket = [{ id: 1, name: 'product 1' }];
  expect(isProductInBasket(product.id, basket)).toBeTruthy();
});

test('should return false when product is not in basket', () => {
  const product = { id: 1, name: 'product 1' };
  const basket = [{ id: 2, name: 'product 2' }];
  expect(isProductInBasket(product.id, basket)).toBeFalsy();
});
