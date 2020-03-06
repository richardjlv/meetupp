import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Meetupp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <strong>Richard Junio</strong>
            <Link to="/profile">Meu perfil</Link>
          </Profile>
          <button type="button">Sair</button>
        </aside>
      </Content>
    </Container>
  );
}
