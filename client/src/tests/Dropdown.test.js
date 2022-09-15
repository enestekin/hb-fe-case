import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from '../components/Dropdown';
import { AppContext } from '../store/appContext';

describe('<Dropdown /> sortDropdown', () => {
  const sortOptions = [
    { name: 'asc', text: 'En Düşük Fiyat' },
    { name: 'desc', text: 'En Yüksek Fiyat' },
    { name: 'newestaz', text: 'En Yeniler (AZ)' },
    { name: 'newestza', text: 'En Yeniler (ZA)' },
  ];

  const handleSortChange = jest.fn();

  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ handleSortChange }}>
      {children}
    </AppContext.Provider>
  );

  test('should list all the sort options', () => {
    render(<Dropdown type='sortDropdown' sortOptions={sortOptions} />, {
      wrapper,
    });
    expect(screen.getByText('En Düşük Fiyat')).toBeInTheDocument();
    expect(screen.getByText('En Yüksek Fiyat')).toBeInTheDocument();
    expect(screen.getByText('En Yeniler (AZ)')).toBeInTheDocument();
    expect(screen.getByText('En Yeniler (ZA)')).toBeInTheDocument();
  });

  test('should call handleSortClick function when clicked an option', () => {
    render(<Dropdown type='sortDropdown' sortOptions={sortOptions} />, {
      wrapper,
    });

    userEvent.click(screen.getByText('En Yüksek Fiyat'));
    expect(handleSortChange).toHaveBeenCalledWith('desc');
  });
});

describe('<Dropdown /> basket', () => {
  const basket = [
    { id: 1, description: 'text1', image: '../assets/images/prod1.png' },
  ];

  const showModal = jest.fn();

  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ showModal }}>{children}</AppContext.Provider>
  );

  test('remove button, image and description should be in document', () => {
    render(<Dropdown type='basket' items={basket} />, {
      wrapper,
    });
    const removeButton = screen.getByText('Kaldir');
    const image = screen.getByAltText('product-item');
    const description = screen.getByText('text1');
    expect(removeButton).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
