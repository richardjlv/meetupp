import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  TextSubmitButton,
  NavigateButton,
  Logo,
  TextNavigateButton,
} from '~/pages/__layouts/auth/styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest);

    setEmail('');
    setPassword('');
  }

  function navigateToRegister() {
    navigation.navigate('SignUp');
  }

  return (
    <Container>
      <Form>
        <Logo />
        <Input
          testID="email-input"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholder="Seu E-mail"
        />
        <Input
          testID="password-input"
          value={password}
          secureTextEntry
          placeholder="Sua Senha"
          onChangeText={setEmail}
        />
        <SubmitButton onPress={handleSubmit}>
          <TextSubmitButton>Entrar</TextSubmitButton>
        </SubmitButton>
        <NavigateButton onPress={navigateToRegister}>
          <TextNavigateButton>Criar conta grátis</TextNavigateButton>
        </NavigateButton>
      </Form>
    </Container>
  );
}
