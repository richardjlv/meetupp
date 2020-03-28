import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Container } from './styles';
import FormMeetup from '~/components/FormMeetup';
import api from '~/services/api';
import history from '~/services/history';
import { createMeetupRequest } from '~/store/modules/meetup/actions';

export default function NewMeetup() {
  const dispatch = useDispatch();

  async function handleSubmit({
    name,
    description,
    banner_id,
    date,
    location,
  }) {
    dispatch(createMeetupRequest(name, description, banner_id, date, location));
  }

  return (
    <Container>
      <FormMeetup handleSubmit={handleSubmit} action="Criar" />
    </Container>
  );
}
