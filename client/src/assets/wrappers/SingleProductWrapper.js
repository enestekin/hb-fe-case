import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid
    ${(props) => (props.isMouseEnter === false ? 'transparent' : '#e5e5e5')};
  cursor: pointer;

  img {
    height: 329px;
    object-fit: cover;
    width: 244px;
  }

  div {
    color: #484848;
    font-size: 12px;
    padding: 10px 20px;
    text-align: left;
  }

  p {
    margin: 0;
  }

  span {
    font-weight: bold;
  }

  p:nth-child(1) {
    height: 34px;
    line-height: 18px;
    margin-bottom: 10px;
  }

  p:nth-child(2),
  p:nth-child(3) {
    margin-bottom: 5px;
  }

  p:nth-child(4) {
    color: #000;
    font-size: 14px;
    font-weight: bold;
    margin-top: 13px;
  }

  p:nth-child(5) {
    color: #9b9b9b;
    display: inline;
    font-size: 13px;
  }

  .discount {
    color: #f90000;
    margin-left: 5px;
  }

  .disabled {
    background: #e5e5e5 !important;
    color: #484848 !important;
  }
`;

const Image = styled.div`
  border: 1px solid
    ${(props) => (props.isMouseEnter === true ? 'transparent' : '#e5e5e5')};
  border-radius: 5px;
  text-align: center !important;
`;

const Button = styled.button`
  background-color: rgb(255, 238, 227);
  border-radius: 8px;
  border: none;
  color: rgb(255, 96, 0);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 32px;
  margin-top: 43px;
  outline: none;
  width: 100%;
`;

export { Wrapper, Image, Button };
