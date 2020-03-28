import React, { useEffect, useState } from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, MeetupHeader, Date } from './styles';
import api from '~/services/api';
import { deleteMeetupRequest } from '~/store/modules/meetup/actions';
import { formatDate } from '~/util/format';

export default function Meetup() {
  const { id } = useParams();
  const [meetup, setMeetup] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`/users/${id}`);

        setMeetup({
          ...response.data,
          dateFormatted: formatDate(response.data.date),
        });
      } catch (err) {
        toast.error('Meetup não existe ou não é organizado por você');
        history.push('/dashboard');
      }
    }

    loadMeetup();
  }, [id, history]);

  async function handleDelete() {
    dispatch(deleteMeetupRequest(id));
  }

  async function handleEdit() {
    history.push(`/edit/${id}`, { meetup });
  }

  return (
    <Container>
      <MeetupHeader>
        <strong>{meetup.name}</strong>
        <div>
          <button type="button" onClick={handleEdit}>
            <MdEdit color="#fff" size={24} />
            Editar
          </button>
          <button type="button" onClick={handleDelete}>
            <MdDeleteForever color="#fff" size={24} />
            Cancelar
          </button>
        </div>
      </MeetupHeader>
      <img src={meetup.banner && meetup.banner.url} alt="evento" />
      <p>{meetup.description}</p>
      <Date>
        <span>{meetup.dateFormatted}</span>
        <span>{meetup.location}</span>
      </Date>
    </Container>
  );
}
