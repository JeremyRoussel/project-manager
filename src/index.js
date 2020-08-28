import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import ProjectManagement from './components/projects/ProjectManagement'
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/projects" component={ProjectManagement} />




        <Route component={App} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,document.getElementById('root')
);