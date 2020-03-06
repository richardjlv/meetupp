import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <Form>
        <img src={logo} alt="Meetup" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
      </Form>

      <Link to="/register">Crie uma conta grátis</Link>
    </>
  );
}
