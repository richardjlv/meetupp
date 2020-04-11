import { Alert } from 'react-native';
import { takeLatest, all, call, put } from 'redux-saga/effects';

import { updateProfileSuccess, updateProfileFailure } from './actions';
import api from '~/services/api';

export function* updateProfile({ payload }) {
  const { name, email, ...rest } = payload.data;

  const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

  try {
    const response = yield call(api.put, 'users', profile);

    Alert.alert('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro ao atualizar o perfil, verifique seus dados!');

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
