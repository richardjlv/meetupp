import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 315px;
  text-align: center;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;

    img {
      margin-bottom: 50px;
    }

    span {
      color: ${darken(0.05, '#f94d6a')};
      font-weight: bold;
      padding: 0 0 15px;
      opacity: 0.8;
    }

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      margin-bottom: 15px;
      padding: 0 15px;
    }

    button {
      font-size: 18px;
      background: #f94d6a;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      padding: 10px 0;
      margin: 5px 0 10px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }

  a {
    color: #fff;
    font-size: 16px;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }
`;
