import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('<Header />', () => {
  test('logo should be in the document', () => {
    render(<Header />);
    expect(screen.getByAltText('hepsiburada')).toBeInTheDocument();
  });

  test('basket should be in the document', () => {
    render(<Header />);
    expect(screen.getByText('Sepetim')).toBeInTheDocument();
  });

  test('search input should be in the document', () => {
    render(<Header />);
    expect(
      screen.getByPlaceholderText('25 milyondan fazla urun icerisinde ara')
    ).toBeInTheDocument();
  });
});
