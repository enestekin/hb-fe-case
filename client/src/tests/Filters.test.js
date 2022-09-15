import { render, screen } from '@testing-library/react';
import Filters from '../components/Filters';

describe('<Filters />', () => {
  test('should render filters', () => {
    render(<Filters />);
    expect(screen.getByText('Renk')).toBeInTheDocument();
    expect(screen.getByText('Marka')).toBeInTheDocument();
  });
});
