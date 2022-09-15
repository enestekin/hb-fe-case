import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../components/Modal';
import { AppContext } from '../store/appContext';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'overlays');
document.body.appendChild(modalRoot);

describe('<Modal />', () => {
  const item = {
    id: 1,
    description: 'text1',
    image: '../assets/images/prod1.png',
  };
  const hideModal = jest.fn();
  const deleteFromBasket = jest.fn();

  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ deleteFromBasket }}>
      {children}
    </AppContext.Provider>
  );

  test('should be in the document title, description and buttons', () => {
    render(<Modal isModalShow={true} />, { wrapper });
    expect(
      screen.getByText('Ürünü silmek istediğinize emin misiniz?')
    ).toBeInTheDocument();
    expect(screen.getByText(/Lorem/i)).toBeInTheDocument();
    expect(screen.getByText('EVET')).toBeInTheDocument();
    expect(screen.getByText('HAYIR')).toBeInTheDocument();
  });

  test('should call hideModal when clicking on the decline button', () => {
    render(<Modal isModalShow={true} hideModal={hideModal} />, { wrapper });
    userEvent.click(screen.getByText('HAYIR'));
    expect(hideModal).toHaveBeenCalled();
    expect(deleteFromBasket).not.toHaveBeenCalled();
  });

  test('should call deleteFromBasket when clicking on the approve button', () => {
    render(<Modal isModalShow={true} item={item} hideModal={hideModal} />, {
      wrapper,
    });
    userEvent.click(screen.getByText('EVET'));
    expect(deleteFromBasket).toHaveBeenCalledWith(item);
    expect(hideModal).toHaveBeenCalled();
  });

  test('should not call deleteFromBasket when clicking on the decline button', () => {
    render(<Modal isModalShow={true} hideModal={hideModal} />, { wrapper });
    userEvent.click(screen.getByText('HAYIR'));
    expect(deleteFromBasket).not.toHaveBeenCalled();
    expect(hideModal).toHaveBeenCalled();
  });

  test('modal should not be in the document when isModalShow is false', () => {
    render(<Modal isModalShow={false} />, { wrapper });
    expect(
      screen.queryByText('Ürünü silmek istediğinize emin misiniz?')
    ).not.toBeInTheDocument();
  });
});
