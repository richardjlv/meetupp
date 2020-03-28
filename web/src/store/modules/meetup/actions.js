export function createMeetupRequest(
  name,
  description,
  banner_id,
  date,
  location
) {
  return {
    type: '@meetup/CREATE_REQUEST',
    payload: { name, description, banner_id, date, location },
  };
}

export function createMeetupSuccess() {
  return {
    type: '@meetup/CREATE_SUCCESS',
  };
}

export function editMeetupRequest(
  id,
  name,
  description,
  banner_id,
  date,
  location
) {
  return {
    type: '@meetup/EDIT_REQUEST',
    payload: { id, name, description, banner_id, date, location },
  };
}

export function editMeetupSuccess() {
  return {
    type: '@meetup/EDIT_SUCCESS',
  };
}

export function deleteMeetupRequest(id) {
  return {
    type: '@meetup/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteMeetupSuccess() {
  return {
    type: '@meetup/DELETE_SUCCESS',
  };
}

export function MeetupFailure() {
  return {
    type: '@meetup/FAILURE',
  };
}
