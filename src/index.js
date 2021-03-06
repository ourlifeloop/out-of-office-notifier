import React from 'react';
import ReactDOM from 'react-dom';
import { LocationProvider, Router } from '@reach/router';
import { Provider } from 'react-redux';

import Protected from 'components/protected-hoc';
import Login from 'components/login';
import Forgot from 'components/forgot';
import Signup from 'components/signup';
import Calendar from 'components/calendar';

import createStore from 'store';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'styles/global.scss';

const { store, history } = createStore();
const ProtectedCalendar = Protected(Calendar);

ReactDOM.render(
  <Provider store={store}>
    <LocationProvider history={history}>
      <Router>
        <Login path="/" />
        <Forgot path="/forgot" />
        <Signup path="/signup" />
        <ProtectedCalendar path="/calendar" />
      </Router>
    </LocationProvider>
  </Provider>,
  document.getElementById('root'),
);
