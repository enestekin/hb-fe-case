import { render, screen } from '@testing-library/react';
import Loading from '../components/Loading';

describe('<Loading />', () => {
  test('should render "Yükleniyor..."', () => {
    render(<Loading />);
    expect(screen.getByText('Yükleniyor...')).toBeInTheDocument();
  });
});
