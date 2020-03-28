import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: left;

  img {
    height: auto;
    max-width: calc(100% - 20px);
    padding: 0 10px;
    margin: 0 10px;
  }

  > p {
    display: flex;
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    margin: 10px;
    padding: 20px 10px;
    white-space: pre-wrap;
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

      &:hover {
        background: ${darken(0.05, '#4dbaf9')};
      }
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
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }

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
  display: flex;

  span {
    display: inline-block;
    margin-left: 20px;
    margin-right: 20px;
    color: #fff;
    opacity: 0.6;
  }
`;
