import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { MdEdit } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Container, Divider } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório!'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório!'),
  oldPassword: Yup.string(),
  password: Yup.string(),
  confirmPassword: Yup.string(),
});

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu Nome" />
        <Input name="email" placeholder="Seu E-mail" />
        <Divider />
        <Input name="oldPassword" type="password" placeholder="Senha Atual" />
        <Input name="password" type="password" placeholder="Nova Senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmar Nova Senha"
        />
        <button type="submit">
          <MdEdit color="#fff" size={24} />
          Atualizar Perfil
        </button>
      </Form>
    </Container>
  );
}
