import { Wrapper, Button } from '../assets/wrappers/SubHeaderWrapper';
import Dropdown from './Dropdown';
import { useAppContext } from '../store/appContext';
import { useState } from 'react';
import Icon from '../assets/images/bottom-arrow.svg';

const SubHeader = () => {
  const { search, sortOptions } = useAppContext();
  const [isDropdownShow, setIsDropdownShow] = useState(false);

  return (
    <Wrapper>
      <div>
        <h2>iPhone iOS cep telefonu</h2>
        <p>
          <span className='searched-value'>Aranan kelime:</span> {search}
        </p>
      </div>
      <Button onClick={() => setIsDropdownShow(!isDropdownShow)}>
        Sıralama <img src={Icon} alt='bottom-arrow' />
        {isDropdownShow && (
          <Dropdown sortOptions={sortOptions} type='sortDropdown' />
        )}
      </Button>
    </Wrapper>
  );
};
export default SubHeader;
