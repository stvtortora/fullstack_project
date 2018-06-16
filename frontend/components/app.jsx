import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

import NavBar from './nav_bar/nav_bar';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import DashBoard from './dashboard/dashboard_container';
import TaskersForm from './taskers_form/taskers_form';
import ConfirmTask from './confirm_task/confirm_task';
import DetailsForm from './details_form/details_form_container';
import RedirectHandler from './confirm_task/redirect_handler';

const App = () => (
  <div>
    <Route path='/' exact component={DashBoard} />
    <Route path='/taskform/details' exact component={DetailsForm} />
    <Route path='/taskform/select_tasker' exact component={TaskersForm} />
    <Route path='/taskform/confirm_task' exact component={RedirectHandler}/>
  </div>
);



export default App;
