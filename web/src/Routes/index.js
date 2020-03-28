import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Dashboard from '~/pages/Dashboard';
import EditMeetup from '~/pages/EditMeetup';
import Meetup from '~/pages/Meetup';
import NewMeetup from '~/pages/NewMeetup';
import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup/:id" component={Meetup} isPrivate />
      <Route path="/edit/:id" component={EditMeetup} isPrivate />
      <Route path="/create" component={NewMeetup} isPrivate />
      <Route path="/register" component={SignUp} />
    </Switch>
  );
}
