import React from 'react';
import ReactDom from 'react-dom';
import { Backdrop, Wrapper } from '../assets/wrappers/ModalWrapper';
import { useAppContext } from '../store/appContext';

const Modal = ({ isModalShow, hideModal, item }) => {
  const { deleteFromBasket } = useAppContext();

  const handleApproveClick = () => {
    hideModal();
    deleteFromBasket(item);
  };

  const handleDeclineClick = () => {
    hideModal();
  };

  if (!isModalShow) return null;

  return ReactDom.createPortal(
    <>
      <Backdrop />
      <Wrapper>
        <p className='title'>Ürünü silmek istediğinize emin misiniz?</p>
        <p className='description'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentiall....
        </p>
        <div className='buttons'>
          <button onClick={handleApproveClick} className='approve btn'>
            EVET
          </button>
          <button onClick={handleDeclineClick} className='decline btn'>
            HAYIR
          </button>
        </div>
      </Wrapper>
    </>,
    document.getElementById('overlays')
  );
};

export default Modal;
