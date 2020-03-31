import { useNavigation } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';
import { fireEvent } from 'react-native-testing-library';
import { useDispatch } from 'react-redux';

import SignUp from '~/pages/SignUp';
import { signUpRequest } from '~/store/modules/auth/actions';

jest.mock('react-redux');

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn().mockReturnValue({
    navigate: jest.fn(),
  }),
}));

describe('SignUp page', () => {
  it('should be to able register user', () => {
    const { getByText, getByTestId } = render(<SignUp />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    const name = 'example';
    const email = 'example@example.com';
    const password = '123456';

    fireEvent.changeText(getByTestId('name-input'), name);
    fireEvent.changeText(getByTestId('email-input'), email);
    fireEvent.changeText(getByTestId('password-input'), password);
    fireEvent.press(getByText('Criar Conta'));

    expect(dispatch).toHaveBeenCalledWith(signUpRequest(name, email, password));
    expect(getByTestId('name-input')).toHaveProp('value', '');
    expect(getByTestId('email-input')).toHaveProp('value', '');
    expect(getByTestId('password-input')).toHaveProp('value', '');
  });

  it('should have a link to login', () => {
    const { getByText } = render(<SignUp />);

    fireEvent.press(getByText('Já tenho login'));

    expect(useNavigation).toHaveBeenCalled();
  });
});
