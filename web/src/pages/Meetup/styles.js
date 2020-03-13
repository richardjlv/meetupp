import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: left;

  img {
    max-width: 900px;
    max-height: 300px;
    width: calc(100% - 20px);
    padding: 0 10px;
    margin: 0 10px;
  }

  > p {
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    margin: 10px;
    padding: 10px;
    white-space: pre-wrap;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 10px;
    padding: 25px 10px;

    input {
      background: rgba(0, 0, 0, 0.2);
      width: 100%;
      max-height: 600px;
      border: 0;
      border-radius: 4px;
      height: 50px;
      margin-bottom: 10px;
      margin-top: 10px;
      padding: 10px 15px;
      color: rgba(255, 255, 255, 0.7);
      resize: auto;
    }

    textarea {
      line-height: 20px;
      margin: 15px 0;
      height: 200px;
      align-self: stretch;
      background: rgba(0, 0, 0, 0.1);
      color: #fff;
      padding: 15px;
      border: 0;
      border-radius: 4px;
    }

    button {
      background: #4dbaf9;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 25px;
      margin-top: 20px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.05, '#4dbaf9')};
      }
    }
  }
`;

export const MeetupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 10px;
  padding: 25px 10px;

  strong {
    font-size: 26px;
    color: #fff;
  }

  > div {
    display: flex;
    flex-direction: row;

    button:first-child {
      background: #4dbaf9;
    }

    button {
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px 25px;
      margin-left: 20px;

      p {
        display: block;
        color: #fff;
        font-weight: bold;
        margin-left: 10px;
      }
    }
  }
`;

export const Date = styled.div`
  margin: 10px;
  padding: 10px;

  span {
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
    color: #fff;
    opacity: 0.6;
  }
`;
