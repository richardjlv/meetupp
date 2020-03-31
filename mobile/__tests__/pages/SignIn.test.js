import { useNavigation } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';
import { fireEvent } from 'react-native-testing-library';
import { useDispatch } from 'react-redux';

import SignIn from '~/pages/SignIn';
import { signInRequest } from '~/store/modules/auth/actions';

jest.mock('react-redux');

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn().mockReturnValue({
    navigate: jest.fn(),
  }),
}));

describe('SignIn page', () => {
  it('should be to able init a session', () => {
    const { getByText, getByTestId } = render(<SignIn />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.changeText(getByTestId('email-input'), 'example@example.com');
    fireEvent.changeText(getByTestId('password-input'), '123456');
    fireEvent.press(getByText('Entrar'));

    expect(dispatch).toHaveBeenCalledWith(signInRequest);
    expect(getByTestId('email-input')).toHaveProp('value', '');
    expect(getByTestId('password-input')).toHaveProp('value', '');
  });

  it('should have a link to register', () => {
    const { getByText } = render(<SignIn />);

    fireEvent.press(getByText('Criar conta grátis'));

    expect(useNavigation).toHaveBeenCalled();
  });
});
