import React from 'react';
import { toast } from 'react-toastify';

import { Container } from './styles';
import FormMeetup from '~/components/FormMeetup';
import api from '~/services/api';
import history from '~/services/history';

export default function NewMeetup() {
  async function handleSubmit(data) {
    try {
      await api.post(`/meetups`, data);

      toast.success('Meetup criado com sucesso');

      history.push('/dashboard');
    } catch (err) {
      toast.error('Não foi possível criar o Meetup!');
    }
  }

  return (
    <Container>
      <FormMeetup handleSubmit={handleSubmit} action="Criar" />
    </Container>
  );
}
