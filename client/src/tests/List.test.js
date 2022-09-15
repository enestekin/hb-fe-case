import { render, screen } from '@testing-library/react';
import List from '../components/List';

describe('<List />', () => {
  test('renders without crashing', () => {
    render(<List />);
    expect(screen.getByTestId('list')).toBeInTheDocument();
  });
});
