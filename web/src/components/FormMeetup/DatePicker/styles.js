import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  .react-datepicker__month-container,
  .react-datepicker {
    background: ${darken(0.1, '#402845')};
    border-radius: 0.3rem;
  }
  .react-datepicker__time {
    background: rgba(0, 0, 0, 0.2);
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background: rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--keyboard-selected:hover,
  .react-datepicker__day:hover {
    background: #eee;
    color: #402845;
    transition: 0.2s;
    font-weight: bold;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name,
  .react-datepicker__day {
    color: #eee;
  }

  .react-datepicker-time__caption {
    font-weight: bold;
    color: #eee;
  }

  .react-datepicker__day--disabled {
    color: #eee;
    opacity: 0.5;
  }

  .react-datepicker__day--disabled:hover {
    font-weight: normal;
    color: #eee;
    opacity: 0.5;
    background: none;
  }

  .react-datepicker__time-container {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  .react-datepicker {
    border: 0;
  }
  .react-datepicker__header {
    background: rgba(0, 0, 0, 0.3);
    border: 0;
  }
`;
