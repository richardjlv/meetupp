import { Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import React from 'react';
import { MdCancel, MdAddCircleOutline } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  function handleCancel() {
    history.push('/dashboard');
  }

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
      <section>
        <button type="submit">
          <MdAddCircleOutline color="#fff" size={24} />

          {action}
        </button>
        <button type="button" onClick={handleCancel}>
          <MdCancel color="#fff" size={24} />
          Cancelar
        </button>
      </section>
    </FormContainer>
  );
}

EditMeetup.propTypes = {
  meetup: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
  }),
  handleSubmit: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};

EditMeetup.defaultProps = {
  meetup: {
    name: '',
    description: '',
    date: '',
    location: '',
  },
};
