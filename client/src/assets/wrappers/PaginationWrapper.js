import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin: 40px 0 100px calc(20% + 48px);

  .prev-next-btn {
    &:first-child {
      margin: 0 20px 0 0;
    }

    &:last-child {
      margin: 0 0 0 20px;
    }
  }
  .btn {
    background: transparent;
    border: 1px solid #eeeeee;
    border-radius: 9px;
    color: #646464;
    cursor: pointer;
    font-size: 10px;
    padding: 12px;
  }
  div {
    display: flex;
    gap: 0.5rem;
  }
  .active {
    border: 1px solid rgb(255, 96, 0);
  }
`;

export default Wrapper;
