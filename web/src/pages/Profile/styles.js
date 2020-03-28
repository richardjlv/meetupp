import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 15px 10px;
  padding: 15px 10px;

  form {
    margin-top: 20px;
    align-items: flex-end;

    button {
      width: 182px;
      margin: 20px 0;
    }
  }
`;

export const Divider = styled.div`
  height: 2px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  margin: 20px auto;
`;
