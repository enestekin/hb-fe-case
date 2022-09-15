import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Basket from '../components/Basket';
import { AppContext } from '../store/appContext';

describe('<Basket /> with no item', () => {
  const basket = [];
  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ basket }}>{children}</AppContext.Provider>
  );

  test('should render basket component without crashing', () => {
    render(<Basket />, { wrapper });
    expect(screen.getByTestId('basket-menu')).toBeInTheDocument();
  });

  test('basket container should be in the document', () => {
    render(<Basket />, { wrapper });
    const basketText = screen.getByText('Sepetim');
    expect(basketText).toBeInTheDocument();
  });

  test('should display "Sepetiniz bos" menu when hover on empty basket', () => {
    render(<Basket />, { wrapper });
    const basketText = screen.getByText('Sepetim');
    userEvent.hover(basketText);
    expect(screen.getByText('Sepetiniz bos')).toBeInTheDocument();
  });
  test('should display the quantity "0" when hover on empty basket', () => {
    render(<Basket />, { wrapper });
    const basketText = screen.getByText('Sepetim');
    const basketQuantity = screen.getByTestId('empty-basket');
    userEvent.hover(basketText);
    expect(basketQuantity.innerHTML).toBe('0');
  });
});

describe('<Basket /> with item', () => {
  const basket = [
    { id: 1, description: 'text1', image: '../assets/images/prod1.png' },
    { id: 2, description: 'text2', image: '../assets/images/prod2.png' },
  ];
  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ basket }}>{children}</AppContext.Provider>
  );

  test('should visible the items when we hover the basket', () => {
    render(<Basket />, { wrapper });
    const basketText = screen.getByText('Sepetim');
    userEvent.hover(basketText);
    expect(screen.getByText('text1')).toBeInTheDocument();
    expect(screen.getByText('text2')).toBeInTheDocument();
  });

  test('basket container should be in the document', () => {
    render(<Basket />, { wrapper });
    const basketText = screen.getByText('Sepetim');
    expect(basketText).toBeInTheDocument();
  });

  test('should display the quantity "2" when hover on empty basket', () => {
    render(<Basket />, { wrapper });
    const basketText = screen.getByText('Sepetim');
    const basketQuantity = screen.getByTestId('empty-basket');
    userEvent.hover(basketText);
    expect(basketQuantity.innerHTML).toBe(basket.length.toString());
  });

  test('should not display "Sepetiniz bos" when we hover the basket', () => {
    render(<Basket />, { wrapper });
    expect(screen.queryByText('Sepetiniz bos')).not.toBeInTheDocument();
  });
});
