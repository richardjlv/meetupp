import { useField } from '@rocketseat/unform';
import { addHours } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({ name, ...rest }) => {
  const nextDate = addHours(new Date(), 2);
  const datepickerRef = useRef();
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(
    (defaultValue && new Date(defaultValue)) || nextDate
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
      showTimeSelect
      locale={pt}
      dateFormat="d 'de' MMMM, 'às' HH:mm"
      selected={date}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default DatePicker;
