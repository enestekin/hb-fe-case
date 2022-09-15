import styled from 'styled-components';

const Wrapper = styled.ul`
  background-color: #000;
  color: white;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 45px;
  width: 170px;
  left: 0px;

  li {
    cursor: pointer;
    list-style: none;
    margin-left: 10px;
    padding: 2px 0;
    text-align: start;
  }

  .active {
    color: rgb(255, 96, 0);
  }

  .icon {
    margin-right: 10px;
  }
`;

const Content = styled.ul`
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  background: #fff;
  margin: 0;
  position: absolute;
  padding: 0 28px;
  right: -1px;
  top: 43px;
  width: 360px;
  z-index: 2;

  li {
    display: flex;
    list-style: none;
    margin: 30px 0;

    p {
      margin: 0;
    }

    img {
      display: block;
      object-fit: cover;
      height: 59.23px;
      width: 40px;
    }

    div {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
      justify-content: space-between;
    }

    .basket-description {
      color: #484848;
      font-size: 12px;
    }

    .basket-remove {
      display: inline-block;
      border: 1px solid #f90000;
      border-radius: 4px;
      color: #f90000;
      cursor: pointer;
      font-size: 10px;
      padding: 4px 7px;
    }
  }
`;

export { Wrapper, Content };
