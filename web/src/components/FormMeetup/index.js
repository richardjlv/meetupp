import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import React from 'react';
import * as Yup from 'yup';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';
import { FormContainer } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  banner_id: Yup.number(),
  description: Yup.string().required('A descrição é obrigatória!'),
  date: Yup.date().required('A data é obrigatória!'),
  location: Yup.string().required('A localização é obrigatória!'),
});

export default function EditMeetup({ meetup, handleSubmit, action }) {
  return (
    <FormContainer schema={schema} initialData={meetup} onSubmit={handleSubmit}>
      <BannerInput name="banner_id" />
      <Input name="name" placeholder="Título do Meetup" />
      <Input
        name="description"
        type="text"
        multiline
        placeholder="Descrição do Meetup"
      />
      <DatePicker name="date" />
      <Input name="location" placeholder="Localização do Meetup" />
      <button type="submit">{action}</button>
    </FormContainer>
  );
}

EditMeetup.propTypes = {
  meetup: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};
