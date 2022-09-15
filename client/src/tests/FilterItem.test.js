import { render, screen } from '@testing-library/react';
import FilterItem from '../components/FilterItem';
import { AppContext } from '../store/appContext';

describe('<FilterItem />', () => {
  const colorOptions = [
    { color: 'Black', quantity: 8 },
    { color: 'White', quantity: 2 },
    { color: 'Red', quantity: 6 },
  ];

  const handleFilterChange = jest.fn();

  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ handleFilterChange }}>
      {children}
    </AppContext.Provider>
  );

  test('should list all the filter options', () => {
    render(
      <FilterItem
        filterData={colorOptions}
        filterOption='color'
        filterName='Renk'
      />,
      { wrapper }
    );
    expect(screen.getByText('Black (8)')).toBeInTheDocument();
    expect(screen.getByText('White (2)')).toBeInTheDocument();
    expect(screen.getByText('Red (6)')).toBeInTheDocument();
  });

  test('filterName should be in document', () => {
    render(
      <FilterItem
        filterData={colorOptions}
        filterOption='color'
        filterName='Renk'
      />,
      { wrapper }
    );
    expect(screen.getByText('Renk')).toBeInTheDocument();
  });
});
