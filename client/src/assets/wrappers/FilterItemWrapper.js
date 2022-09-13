import styled from 'styled-components';

const Wrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    cursor: pointer;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    width: 50%;

    &:hover {
      color: rgb(255, 96, 0);
    }
  }
  .active {
    color: rgb(255, 96, 0);
  }
`;

export default Wrapper;
