import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  color: #b0b0b0;
  font-size: 17px;
  padding: 0.8rem 1.8rem;
  position: relative;

  .basket-length {
    background-color: #ff6000;
    border-radius: 50%;
    bottom: 36px;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    height: 18px;
    left: 112px;
    line-height: 1.5;
    position: absolute;
    text-align: center;
    width: 18px;
  }

  .white-border {
    background: white;
    height: 2px;
    position: absolute;
    right: 1px;
    top: 42px;
    width: 119px;
    z-index: 3;
  }

  .empty-basket {
    color: #484848;
    border: 1px solid #b0b0b0;
    border-radius: 4px;
    background: #fff;
    margin: 0;
    position: absolute;
    padding: 20px 28px;
    right: -1px;
    top: 43px;
    width: 360px;
    z-index: 2;
  }
`;

export default Wrapper;
