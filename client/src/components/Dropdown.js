import { Wrapper, Content } from '../assets/wrappers/DropdownWrapper';
import { useAppContext } from '../store/appContext';
import { FaCheck } from 'react-icons/fa';
import Modal from './Modal';
import { useState } from 'react';

const Dropdown = (props) => {
  const { sort, handleSortChange } = useAppContext();
  const [isModalShow, setIsModalShow] = useState(false);
  const [deletedItem, setDeletedItem] = useState(null);

  const showModal = () => {
    setIsModalShow(true);
  };

  const hideModal = () => {
    setIsModalShow(false);
  };

  const handleSortClick = (sortName) => {
    handleSortChange(sortName);
  };

  const handleBasketRemoveClick = (item) => {
    setDeletedItem(item);
    showModal();
  };

  if (props.type === 'basket') {
    return (
      <Content>
        {props.items.map((item, index) => {
          return (
            <li key={index}>
              <img src={item.image} alt='product-item' />
              <div>
                <p className='basket-description'>{item.description}</p>
                <span
                  className='basket-remove'
                  onClick={() => handleBasketRemoveClick(item)}
                >
                  Kaldir
                </span>
              </div>
            </li>
          );
        })}
        <Modal
          isModalShow={isModalShow}
          hideModal={hideModal}
          item={deletedItem}
        />
      </Content>
    );
  }

  if (props.type === 'sortDropdown') {
    return (
      <Wrapper data-testid='sortDropdown'>
        {props.sortOptions.map((item, index) => {
          return (
            <li
              key={index}
              className={sort === item.name ? 'active' : ''}
              onClick={() => handleSortClick(item.name)}
            >
              <FaCheck
                className={sort === item.name ? 'icon active' : 'icon'}
              />
              {item.text}
            </li>
          );
        })}
      </Wrapper>
    );
  }
};
export default Dropdown;
