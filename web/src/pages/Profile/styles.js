import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 15px 10px;
  padding: 15px 10px;

  form {
    margin-top: 20px;

    span {
      color: ${darken(0.05, '#f94d6a')};
      font-weight: bold;
      display: block;
      padding: 0 10px 15px;
      opacity: 0.8;
    }

    button {
      margin: 20px auto;
    }
  }
`;

export const Divider = styled.div`
  height: 2px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  margin: 20px auto;
`;
