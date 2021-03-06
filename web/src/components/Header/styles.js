import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
  background: rgba(0, 0, 0, 0.3);
`;

export const Content = styled.div`
  height: 70px;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  text-align: right;
  margin-right: 20px;

  strong {
    display: block;
    color: #fff;
  }

  a {
    display: block;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 5px;
  }
`;
