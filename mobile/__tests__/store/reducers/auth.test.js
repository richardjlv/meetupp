import * as auth from '~/store/modules/auth/actions';
import reducer, { INITIAL_STATE } from '~/store/modules/auth/reducer';

describe('Auth reducer', () => {
  it('SIGN_IN_REQUEST', () => {
    const email = 'example@example.com';
    const password = '123456';

    const state = reducer(INITIAL_STATE, auth.signInRequest(email, password));

    expect(state).toStrictEqual({ token: null, loading: true, signed: false });
  });

  it('SIGN_IN_SUCCESS', () => {
    const token = '1234567890';
    const user = 'user';

    const state = reducer(INITIAL_STATE, auth.signInSuccess(token, user));

    expect(state).toStrictEqual({ token, loading: false, signed: true });
  });

  it('SIGN_OUT', () => {
    const state = reducer(INITIAL_STATE, auth.signOut());

    expect(state).toStrictEqual({ token: null, loading: false, signed: false });
  });

  it('SIGN_FAILURE', () => {
    const FINAL_STATE = { ...INITIAL_STATE, loading: false };

    const state = reducer(INITIAL_STATE, auth.signFailure());

    expect(state).toStrictEqual(FINAL_STATE);
  });
});
