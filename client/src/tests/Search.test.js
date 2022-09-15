import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';
import { AppContext } from '../store/appContext';

describe('<Search />', () => {
  const handleSearchChange = jest.fn();

  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ handleSearchChange }}>
      {children}
    </AppContext.Provider>
  );

  test('should call handleSearchChange when type 2 characters', () => {
    render(<Search />, {
      wrapper,
    });

    const searchInput = screen.getByPlaceholderText(
      '25 milyondan fazla urun icerisinde ara'
    );
    userEvent.type(searchInput, 'ab');
    expect(handleSearchChange).toHaveBeenCalledWith('ab');
  });
});
