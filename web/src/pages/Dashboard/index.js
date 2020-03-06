import React from 'react';
import { MdKeyboardArrowRight, MdAddCircleOutline } from 'react-icons/md';

import { Container, MeetupList } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <div>
        <strong>Meus meetups</strong>
        <button type="button">
          <MdAddCircleOutline color="#fff" size={24} />
          <a>Novo Meetup</a>
        </button>
      </div>
      <MeetupList>
        <li>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de Junho, às 20h</span>
            <MdKeyboardArrowRight color="#fff" size={24} />
          </div>
        </li>
        <li>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de Junho, às 20h</span>
            <MdKeyboardArrowRight color="#fff" size={24} />
          </div>
        </li>
        <li>
          <strong>Meetup de React Native</strong>
          <div>
            <span>24 de Junho, às 20h</span>
            <MdKeyboardArrowRight color="#fff" size={24} />
          </div>
        </li>
      </MeetupList>
    </Container>
  );
}
