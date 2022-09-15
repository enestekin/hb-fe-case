import Wrapper from '../assets/wrappers/BasketWrapper';
import { useAppContext } from '../store/appContext';
import { useState } from 'react';
import Dropdown from './Dropdown';

const Basket = () => {
  const [isDropdownShow, setIsDropdownShow] = useState(false);
  const { basket } = useAppContext();

  const showDropdown = () => {
    setIsDropdownShow(true);
  };

  const hideDropdown = (e) => {
    if (
      e.clientY <= 10 ||
      e.clientX <= 10 ||
      e.clientX >= window.innerWidth - 10 ||
      e.clientY >= window.innerHeight - 10
    ) {
      return;
    }
    setIsDropdownShow(false);
  };

  return (
    <Wrapper
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      data-testid='basket-menu'
    >
      Sepetim
      <span className='basket-length' data-testid='empty-basket'>
        {basket.length}
      </span>
      {isDropdownShow && <div className='white-border'></div>}
      {basket.length === 0 && isDropdownShow && (
        <div className='empty-basket'>Sepetiniz bos</div>
      )}
      {isDropdownShow && basket.length > 0 && (
        <Dropdown items={basket} type='basket' data-testid='basket-dropdown' />
      )}
    </Wrapper>
  );
};
export default Basket;
