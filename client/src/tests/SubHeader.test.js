import { render, screen } from '@testing-library/react';
import SubHeader from '../components/SubHeader';
import { AppContext } from '../store/appContext';

describe('<SubHeader />', () => {
  const search = 'abc';
  const sortOptions = [
    { name: 'asc', text: 'En Düşük Fiyat' },
    { name: 'desc', text: 'En Yüksek Fiyat' },
    { name: 'newestaz', text: 'En Yeniler (AZ)' },
    { name: 'newestza', text: 'En Yeniler (ZA)' },
  ];

  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ search, sortOptions }}>
      {children}
    </AppContext.Provider>
  );

  test('"iPhone iOS cep telefonu" should be in the document', () => {
    render(<SubHeader />, { wrapper });
    expect(screen.getByText('iPhone iOS cep telefonu')).toBeInTheDocument();
  });

  test('should render searched charachters if search is not empty', () => {
    render(<SubHeader />, { wrapper });
    expect(screen.getByText('abc')).toBeInTheDocument();
  });

  test('should not render searched charachters if search is empty', () => {
    const search = '';
    const wrapper = ({ children }) => (
      <AppContext.Provider value={{ search, sortOptions }}>
        {children}
      </AppContext.Provider>
    );
    render(<SubHeader />, { wrapper });

    const searchedValue = screen.queryByText('Aranan Kelime');
    expect(searchedValue).toBeNull();
  });

  test('should render "Dropdown" text', () => {
    render(<SubHeader />, { wrapper });
    expect(screen.getByText('Sıralama')).toBeInTheDocument();
  });
});
