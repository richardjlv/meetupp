import React, { useEffect, useState } from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, MeetupHeader, Date } from './styles';
import FormMeetup from '~/components/FormMeetup';
import api from '~/services/api';
import history from '~/services/history';
import { formatDate } from '~/util/format';

export default function Meetup() {
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [meetup, setMeetup] = useState({});

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
  }, [id, editing]);

  async function handleDelete() {
    try {
      await api.delete(`/meetups/${id}`);

      toast.success('Meetup deletado com sucesso');

      history.push('/dashboard');
    } catch (err) {
      toast.error('Não foi possível deletar o Meetup');
    }
  }

  async function handleEdit() {
    setEditing(!editing);
  }

  async function handleSubmit(data) {
    try {
      await api.put(`/meetups/${id}`, data);

      toast.success('Meetup atualizado com sucesso');

      handleEdit();
    } catch (err) {
      toast.error('Não foi possível atualizar o Meetup, verifique seus dados!');
    }
  }

  function MeetupContent() {
    return (
      <>
        <MeetupHeader>
          <strong>{meetup.name}</strong>
          <div>
            <button type="button" onClick={handleEdit}>
              <MdEdit color="#fff" size={24} />
              <p>Editar</p>
            </button>
            <button type="button" onClick={handleDelete}>
              <MdDeleteForever color="#fff" size={24} />
              <p>Delete</p>
            </button>
          </div>
        </MeetupHeader>
        <img src={meetup.banner ? meetup.banner.url : ''} alt="evento" />
        <p>{meetup.description}</p>
        <Date>
          <span>{meetup.dateFormatted}</span>
          <span>{meetup.location}</span>
        </Date>
      </>
    );
  }

  return (
    <Container>
      {editing ? (
        <FormMeetup
          meetup={meetup}
          handleSubmit={handleSubmit}
          action="Atualizar"
        />
      ) : (
          <MeetupContent />
        )}
    </Container>
  );
}
