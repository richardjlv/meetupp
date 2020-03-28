import { toast } from 'react-toastify';
import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  MeetupFailure,
  editMeetupSuccess,
  createMeetupSuccess,
  deleteMeetupSuccess,
} from './actions';
import api from '~/services/api';
import history from '~/services/history';

export function* createMeetup({ payload }) {
  const { name, description, banner_id, date, location } = payload;

  try {
    yield call(api.post, '/meetups', {
      name,
      description,
      banner_id,
      date,
      location,
    });

    toast.success('Meetup criado com sucesso');

    yield put(createMeetupSuccess());

    history.push(`/dashboard`);
  } catch (err) {
    toast.error('Não foi possível criar o Meetup, verifique seus dados!');

    yield put(MeetupFailure());
  }
}
export function* editMeetup({ payload }) {
  const { id, name, description, banner_id, date, location } = payload;

  try {
    yield call(api.put, `/meetups/${id}`, {
      name,
      description,
      banner_id,
      date,
      location,
    });

    toast.success('Meetup atualizado com sucesso');

    yield put(editMeetupSuccess());

    history.push(`/meetup/${id}`);
  } catch (err) {
    toast.error('Não foi possível atualizar o Meetup, verifique seus dados!');

    yield put(MeetupFailure());
  }
}

export function* deleteMeetup({ payload }) {
  const { id } = payload;

  try {
    yield call(api.delete, `/meetups/${id}`);

    toast.success('Meetup deletado com sucesso');

    yield put(deleteMeetupSuccess());

    history.push('/dashboard');
  } catch (err) {
    toast.error('Não é possível deletar Meetups que já passaram');

    yield put(MeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/EDIT_REQUEST', editMeetup),
  takeLatest('@meetup/CREATE_REQUEST', createMeetup),
  takeLatest('@meetup/DELETE_REQUEST', deleteMeetup),
]);
