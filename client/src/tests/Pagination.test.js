import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '../components/Pagination';
import { AppContext } from '../store/appContext';

describe('<Pagination />', () => {
  const handlePageChange = jest.fn();
  const page = 1;
  const numOfPages = 4;

  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ handlePageChange, page, numOfPages }}>
      {children}
    </AppContext.Provider>
  );

  test('should render all the buttons', () => {
    render(<Pagination />, {
      wrapper,
    });
    const prevBtn = screen.getByText('<');
    const nextBtn = screen.getByText('>');
    const pageBtns = screen.getAllByTestId('pageBtn');

    expect(prevBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
    expect(pageBtns.length).toBe(numOfPages);
  });

  test('should call handlePageChange function when clicked a button', () => {
    render(<Pagination />, {
      wrapper,
    });

    userEvent.click(screen.getByText('3'));
    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  test('should disable the prev button when page is 1', () => {
    render(<Pagination />, {
      wrapper,
    });

    expect(screen.getByText('<')).toBeDisabled();
  });

  test('should disable the next button when page is numOfPages', () => {
    const page = 4;
    const numOfPages = 4;
    render(
      <AppContext.Provider value={{ page, numOfPages }}>
        <Pagination />
      </AppContext.Provider>
    );

    expect(screen.getByText('>')).toBeDisabled();
  });

  test('should call handlePageChange function when clicked prev button', () => {
    const page = 4;
    const numOfPages = 4;
    const handlePageChange = jest.fn();
    render(
      <AppContext.Provider value={{ handlePageChange, page, numOfPages }}>
        <Pagination />
      </AppContext.Provider>
    );

    userEvent.click(screen.getByText('<'));
    expect(handlePageChange).toHaveBeenCalledWith(page - 1);
  });

  test('should call handlePageChange function when clicked next button', () => {
    const page = 1;
    const numOfPages = 4;
    const handlePageChange = jest.fn();
    render(
      <AppContext.Provider value={{ handlePageChange, page, numOfPages }}>
        <Pagination />
      </AppContext.Provider>
    );

    userEvent.click(screen.getByText('>'));
    expect(handlePageChange).toHaveBeenCalledWith(page + 1);
  });
});
