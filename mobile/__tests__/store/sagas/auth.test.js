import MockAdapter from 'axios-mock-adapter';
import { runSaga } from 'redux-saga';

import api from '~/services/api';
import navigate from '~/services/rootNavigation';
import * as authAction from '~/store/modules/auth/actions';
import * as authSaga from '~/store/modules/auth/sagas';

const apiMock = new MockAdapter(api);
const token = 'token';
const user = { id: 1, name: 'Smith' };
const name = 'Smith';
const email = 'example@example.com';
const password = '123456';

jest.mock('~/service/rootNavigation', () => {
  return jest.fn().mockReturnValue(jest.fn());
});

describe('Auth saga', () => {
  it('should be to able init session', async () => {
    const dispatch = jest.fn();

    const payload = {
      email,
      password,
    };

    apiMock.onPost('sessions').reply(200, { token, ...user });

    await runSaga({ dispatch }, authSaga.signIn, { payload }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      authAction.signInSuccess(token, user)
    );
    expect(navigate).toHaveBeenCalledWith('App');
  });

  it('should be to able register user', async () => {
    const dispatch = jest.fn();

    const payload = {
      name,
      email,
      password,
    };

    apiMock.onPost('users').reply(200);

    await runSaga({ dispatch }, authSaga.signUp, { payload }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(authAction.signUpSuccess());
    expect(navigate).toHaveBeenCalledWith('SignIn');
  });
});
