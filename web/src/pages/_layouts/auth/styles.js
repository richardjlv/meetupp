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
    img {
      margin-bottom: 50px;
    }

    span {
      color: ${darken(0.05, '#f94d6a')};
      font-weight: bold;
      padding: 0 0 15px;
      opacity: 0.8;
    }

    button {
      font-size: 18px;
      margin: 5px 0 10px;
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
