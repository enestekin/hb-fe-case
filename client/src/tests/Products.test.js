import { render, screen } from '@testing-library/react';
import Products from '../components/Products';
import { AppContext } from '../store/appContext';

describe('<Products />', () => {
  test('should render Loading when loading is true', () => {
    render(
      <AppContext.Provider value={{ isLoading: true }}>
        <Products />
      </AppContext.Provider>
    );

    expect(screen.getByText('Yükleniyor...')).toBeInTheDocument();
  });

  test('should render "Aranan kriterlerde urun bulunamadi." when products is empty', () => {
    render(
      <AppContext.Provider value={{ products: [], isLoading: false }}>
        <Products />
      </AppContext.Provider>
    );

    expect(
      screen.getByText('Aranan kriterlerde urun bulunamadi.')
    ).toBeInTheDocument();
  });

  test('should render products when products is not empty', () => {
    const products = [
      {
        id: 1,
        description:
          'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)',
        brand: 'Apple',
        color: 'Black',
        image: '../../assets/images/prod1.jpg',
        discountedPrice: '90.85',
        price: '124.00',
        discount: '12%',
      },
      {
        id: 2,
        description: 'Apple iPhone 11',
        brand: 'Apple',
        color: 'Yellow',
        image: '../../assets/images/prod2.jpg',
        discountedPrice: '800.85',
        price: '900.00',
        discount: '2%',
      },
    ];
    render(
      <AppContext.Provider value={{ products, isLoading: false, basket: [] }}>
        <Products />
      </AppContext.Provider>
    );

    expect(screen.getByText('Apple iPhone 11')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Apple iPhone 11 Pro Maxi Phone 11 Pro Max iPhone 11 (Max 2 Line)'
      )
    ).toBeInTheDocument();
  });
});
