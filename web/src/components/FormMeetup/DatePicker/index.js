import { useField } from '@rocketseat/unform';
import { addHours, setMinutes } from 'date-fns/esm';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';

import { Wrapper } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, ...rest }) {
  const datepickerRef = useRef();
  const nextTime = addHours(setMinutes(new Date(), 0), 2);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [date, setDate] = useState(
    (defaultValue && new Date(defaultValue)) || nextTime
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
    });
  }, [fieldName, datepickerRef, registerField]);

  function handleChange(e) {
    setDate(e);
  }

  return (
    <Wrapper>
      <ReactDatePicker
        ref={datepickerRef}
        showTimeInput
        locale={pt}
        placeholderText="Selecionar a data"
        timeInputLabel="Time:"
        dateFormat="d 'de' MMMM, 'às' HH:mm"
        minDate={nextTime}
        selected={date}
        onChange={handleChange}
        {...rest}
      />
    </Wrapper>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
