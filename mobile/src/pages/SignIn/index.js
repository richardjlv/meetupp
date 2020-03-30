import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Container, Input, SubmitButton, TextSubmitButton } from './styles';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch({ type: '@user/SIGN_IN_REQUEST', payload: { email, password } });

    setEmail('');
    setPassword('');
  }

  return (
    <Container>
      <Input
        testID="email-input"
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
      <Input
        testID="password-input"
        value={password}
        secureTextEntry
        onChangeText={(e) => setEmail(e)}
      />
      <SubmitButton onPress={handleSubmit}>
        <TextSubmitButton>Entrar</TextSubmitButton>
      </SubmitButton>
    </Container>
  );
}
