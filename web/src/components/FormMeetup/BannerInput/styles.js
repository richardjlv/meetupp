import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  width: 100%;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    margin-bottom: 15px;

    transition: background 0.2s;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    span {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      padding: 5rem 3rem;
      align-items: center;
      color: rgba(255, 255, 255, 0.7);
    }

    p {
      color: rgba(255, 255, 255, 0.7);
    }

    img {
      max-width: 100%;
      height: auto;
      padding: 10px 10px;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;
