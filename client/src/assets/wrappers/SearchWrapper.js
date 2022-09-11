import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  input {
    background: #eeeeee;
    border: none;
    border-radius: 100px;
    height: 48px;
    padding-left: 50px;
    width: 645px;

    &::placeholder {
      color: #b0b0b0;
      font-weight: 400;
      font-size: 15px;
    }

    &:focus {
      outline: none;
    }
  }

  img {
    left: 15px;
    position: absolute;
    top: 17px;
  }
`;

export default Wrapper;
