import { useField } from '@rocketseat/unform';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, ...rest }) {
  const datepickerRef = useRef();
  const { fieldName, registerField, defaultValue } = useField(name);
  const [date, setDate] = useState(
    (defaultValue && new Date(defaultValue)) || ''
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
      <ReactDatePicker
        ref={datepickerRef}
        showTimeInput
        locale={pt}
        minDate={new Date()}
        placeholderText="Selecionar a data"
        dateFormat="d 'de' MMMM, 'às' HH:mm"
        selected={date}
        onChange={handleChange}
        {...rest}
      />
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};
