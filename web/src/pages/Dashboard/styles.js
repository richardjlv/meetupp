import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 15px 10px;
    padding: 15px 10px;

    strong {
      font-size: 26px;
      color: #fff;
    }

    button {
      padding: 12px 20px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      background: #f94d6a;
      color: #fff;
      display: flex;
      align-items: center;

      a {
        margin-left: 10px;
      }
    }
  }
`;

export const MeetupList = styled.ul`
  display: grid;
  grid-template: repeat(1, 1fr);
  grid-gap: 15px;
  margin-top: 30px;
  padding: 0 20px;

  li {
    background: rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-radius: 4px;

    strong {
      color: #fff;
    }

    div {
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;

      span {
        color: rgba(255, 255, 255, 0.6);
        margin-right: 30px;
        font-size: 12px;
      }
    }
  }
`;
