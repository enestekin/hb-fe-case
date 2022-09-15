import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background: rgba(0, 0, 0, 0.3);
`;

const Wrapper = styled.div`
  position: fixed;
  top: 40vh;
  width: 400px;
  background-color: white;
  border: 1px solid rgba(228, 228, 228, 0.6);
  box-shadow: 0px 6px 12px rgba(50, 50, 71, 0.07);
  border-radius: 4px;
  z-index: 30;

  p {
    margin: 0;
    padding: 1.5rem 1.5rem;
  }

  .title {
    border-bottom: 1px solid #cdcdcd;
    color: #484848;
    font-weight: 700;
  }

  .description {
    color: #484848;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.8px;
  }

  .buttons {
    text-align: right;
    padding: 0 1.5rem;
    margin-bottom: 1.5rem;
  }

  .btn {
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    outline: none;
    padding: 5px 0;
    width: 70px;
  }

  .approve {
    background: #90d659;
    margin-right: 10px;
  }

  .decline {
    background: #d65959;
  }
`;

export { Backdrop, Wrapper };
