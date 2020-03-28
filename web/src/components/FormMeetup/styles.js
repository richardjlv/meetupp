import { Form } from '@rocketseat/unform';
import { darken } from 'polished';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  margin: 25px 10px;
  padding: 25px 10px;

  span {
    color: ${darken(0.05, '#f94d6a')};
    font-weight: bold;
    display: block;
    padding: 0 10px 15px;
    opacity: 0.8;
  }

  button {
    margin: 20px 0;
  }

  textarea {
    line-height: 20px;
    margin: 5px 0;
    min-height: 200px;
    align-self: stretch;
    background: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.7);
    padding: 15px;
    border: 0;
    border-radius: 4px;
    resize: vertical;

    &::placeholder {
      font-size: 16px;
    }
  }

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
