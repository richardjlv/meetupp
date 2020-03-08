import React, { useEffect, useState } from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { useParams } from 'react-router-dom';

import { Container, MeetupHeader, Date } from './styles';
import image from '~/assets/Bitmap.png';
import api from '~/services/api';
import { formatDate } from '~/util/format';

export default function Meetup() {
  const { id } = useParams();
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get('/users');

      const data = response.data.find(m => m.id === Number(id[1]));

      setMeetup({
        ...data,
        dateFormatted: formatDate(data.date),
      });
    }

    loadMeetup();
  }, [id]);

  function handleDelete() { }

  return (
    <Container>
      <MeetupHeader>
        <strong>{meetup.name}</strong>
        <div>
          <button type="button">
            <MdEdit color="#fff" size={24} />
            <p>Editar</p>
          </button>
          <button type="button" onClick={handleDelete}>
            <MdDeleteForever color="#fff" size={24} />
            <p>Delete</p>
          </button>
        </div>
      </MeetupHeader>
      <img src={image} alt="evento" />
      <p>{meetup.description}</p>
      <Date>
        <span>{meetup.dateFormatted}</span>
        <span>Rua Guilherme Gembala, 260</span>
      </Date>
    </Container>
  );
}
