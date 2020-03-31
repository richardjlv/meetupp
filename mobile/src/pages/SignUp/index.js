import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Container,
  Form,
  Logo,
  Input,
  SubmitButton,
  TextSubmitButton,
  NavigateButton,
  TextNavigateButton,
} from '~/pages/__layouts/auth/styles';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));

    setName('');
    setEmail('');
    setPassword('');
  }

  function navigateToRegister() {
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <Form>
        <Logo />
        <Input
          testID="name-input"
          placeholder="Seu Nome"
          value={name}
          onChangeText={setName}
        />
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
          onChangeText={setPassword}
        />
        <SubmitButton onPress={handleSubmit}>
          <TextSubmitButton>Criar Conta</TextSubmitButton>
        </SubmitButton>
        <NavigateButton onPress={navigateToRegister}>
          <TextNavigateButton>Já tenho login</TextNavigateButton>
        </NavigateButton>
      </Form>
    </Container>
  );
}
