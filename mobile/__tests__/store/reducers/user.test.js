import * as auth from '~/store/modules/auth/actions';
import * as user from '~/store/modules/user/actions';
import reducer, { INITIAL_STATE } from '~/store/modules/user/reducer';

describe('User reducer', () => {
  it('@user/UPDATE_PROFILE_SUCCESS', () => {
    const profile = 'profile';

    const state = reducer(INITIAL_STATE, user.updateProfileSuccess(profile));

    expect(state).toStrictEqual({ profile });
  });

  it('SIGN_IN_SUCCESS', () => {
    const token = 'token';
    const profile = { name: 'Smith', email: 'example@example.com' };

    const state = reducer(INITIAL_STATE, auth.signInSuccess(token, profile));

    expect(state).toStrictEqual({ profile });
  });

  it('SIGN_OUT', () => {
    const state = reducer(INITIAL_STATE, auth.signOut());

    expect(state).toStrictEqual({ profile: null });
  });
});
