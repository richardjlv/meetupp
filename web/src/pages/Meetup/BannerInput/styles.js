import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  width: 100%;

  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    p {
      color: rgba(255, 255, 255, 0.7);
    }

    img {
      background: rgba(0, 0, 0, 0.2);
      padding: 10px 10px;
      border-radius: 4px;
    }

    input {
      display: none;
    }
  }
`;
