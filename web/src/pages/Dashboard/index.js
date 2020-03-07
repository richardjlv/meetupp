import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';

import { Container, MeetupList } from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('users');

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          dateFormatted: format(
            parseISO(meetup.date),
            "dd 'de' MMMM', às' HH'h' ",
            {
              locale: pt,
            }
          ),
        };
      });

      setMeetups(data);
    }

    loadMeetups();
  }, [meetups]);

  function handleMeetup(id) {
    history.push(`/meetups?id=${id}`);
  }

  return (
    <Container>
      <div>
        <strong>Meus meetups</strong>
        <button type="button">
          <MdAddCircleOutline color="#fff" size={24} />
          <p>Novo Meetup</p>
        </button>
      </div>
      <MeetupList>
        {meetups.map(meetup => (
          <li key={meetup.id}>
            <strong>{meetup.name}</strong>
            <div>
              <span>{meetup.dateFormatted}</span>
              <button type="button" onClick={() => handleMeetup(meetup.id)}>
                <MdKeyboardArrowRight color="#fff" size={24} />
              </button>
            </div>
          </li>
        ))}
      </MeetupList>
    </Container>
  );
}
