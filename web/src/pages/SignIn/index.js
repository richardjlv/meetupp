import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  password: Yup.string().required('A senha é obrigatório!'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="Meetup" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
      </Form>

      <Link to="/register">Crie uma conta grátis</Link>
    </>
  );
}
