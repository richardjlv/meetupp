import MockAdapter from 'axios-mock-adapter';
import { runSaga } from 'redux-saga';

import api from '~/services/api';
import * as userAction from '~/store/modules/user/actions';
import * as userSagas from '~/store/modules/user/sagas';

const apiMock = new MockAdapter(api);

describe('User saga', () => {
  it('should be to able update profile', async () => {
    const dispatch = jest.fn();

    const profile = { name: 'Smith', email: 'example@example.com' };

    const payload = {
      data: { ...profile },
    };

    apiMock.onPut('users').reply(200, { ...profile });

    await runSaga({ dispatch }, userSagas.updateProfile, {
      payload,
    }).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      userAction.updateProfileSuccess(profile)
    );
  });
});
