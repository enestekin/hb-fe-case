import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SingleProduct from '../components/SingleProduct';
import { AppContext } from '../store/appContext';

describe('<SingleProduct />', () => {
  const addToBasket = jest.fn();
  const product = {
    id: 1,
    description:
      'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)',
    brand: 'Apple',
    color: 'Black',
    image: '../../assets/images/prod1.jpg',
    discountedPrice: '90.85',
    price: '124.00',
    discount: '12%',
  };

  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ addToBasket }}>
      {children}
    </AppContext.Provider>
  );

  test('should "Sepete Ekle" visible, "Bu ürünü sepete ekleyemezsiniz." not visible when mouse enter', () => {
    render(<SingleProduct product={product} isProductInBasket={false} />, {
      wrapper,
    });

    userEvent.hover(screen.getByText(product.brand));

    expect(screen.getByText('Sepete Ekle')).toBeVisible();
    expect(screen.queryByText('Bu ürünü sepete ekleyemezsiniz.')).toBeNull();
  });

  test('should "Bu ürünü sepete ekleyemezsiniz." visible, "Sepete Ekle" not visible when mouse enter', () => {
    render(<SingleProduct product={product} isProductInBasket={true} />, {
      wrapper,
    });

    userEvent.hover(screen.getByText(product.brand));

    expect(screen.getByText('Bu ürünü sepete ekleyemezsiniz.')).toBeVisible();
    expect(screen.queryByText('Sepete Ekle')).toBeNull();
  });

  test('should call addToBasket when add to basket button is clicked', () => {
    render(<SingleProduct product={product} isProductInBasket={false} />, {
      wrapper,
    });

    userEvent.hover(screen.getByText(product.brand));
    const addToBasketButton = screen.getByText('Sepete Ekle');
    userEvent.click(addToBasketButton);
    expect(addToBasket).toHaveBeenCalled();
  });

  test('should render product details, when mouseenter', () => {
    render(<SingleProduct product={product} isProductInBasket={false} />, {
      wrapper,
    });
    expect(screen.getByText(product.description)).toBeVisible();
    expect(screen.getByText(product.brand)).toBeVisible();
    expect(screen.getByText(product.color)).toBeVisible();
    expect(screen.getByText(product.price)).toBeVisible();
    expect(screen.getByText(product.discount)).toBeVisible();
  });
});
