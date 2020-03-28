import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import { Container } from './styles';
import FormMeetup from '~/components/FormMeetup';
import { editMeetupRequest } from '~/store/modules/meetup/actions';

export default function EditMeetup() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { state } = useLocation();
  const meetup = state && state.meetup;

  useEffect(() => {
    if (!meetup) {
      history.push('/dashboard');
    }
  }, [meetup, history]);

  async function handleSubmit({
    name,
    description,
    banner_id,
    date,
    location,
  }) {
    dispatch(
      editMeetupRequest(id, name, description, banner_id, date, location)
    );
  }

  return (
    <Container>
      <FormMeetup
        meetup={meetup}
        handleSubmit={handleSubmit}
        action="Atualizar"
      />
    </Container>
  );
}
