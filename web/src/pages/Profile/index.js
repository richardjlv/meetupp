import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, Divider } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Form initialData={profile}>
        <Input name="name" placeholder="Seu Nome" />
        <Input name="email" placeholder="Seu E-mail" />
        <Divider />
        <Input name="oldPassword" placeholder="Senha Atual" />
        <Input name="password" placeholder="Nova Senha" />
        <Input name="confirmPassword" placeholder="Confirmar Nova Senha" />
        <button type="submit">
          <MdEdit color="#fff" size={24} />
          Atualizar Perfil
        </button>
      </Form>
    </Container>
  );
}
