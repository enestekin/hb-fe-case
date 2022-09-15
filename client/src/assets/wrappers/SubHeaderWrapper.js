import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 80px 0 80px;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  .searched-value {
    color: #b0b0b0;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #b4b4bb;
  border-radius: 4px;
  color: #b4b4bb;
  cursor: pointer;
  padding: 10px 17px;
  position: relative;

  img {
    margin-left: 10px;
  }
`;

export { Wrapper, Button };
