import React, { Component } from 'react';
import {Route, BrowserRouter, NavLink, Switch, Redirect, withRouter} from 'react-router-dom';
import Users from './containers/Users/Users';
import Courses from './containers/Courses/Courses';
import Error from './components/Error';
import './App.css';


function App() {

    return (
      <BrowserRouter>
      <div className='App'>
        <nav data-testid = "nav">
          <ul>
            <li><NavLink to='/courses'>Courses</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li> 
          </ul>

        </nav>

        <Switch>

          <Route path='/courses' component={Courses} />
          <Route path='/users' component={Users} />
          <Redirect from='/allcourses' to='/courses' />
          <Route component={Error} />
        </Switch>
        </div>

        
      </BrowserRouter>
    )
  }



  export default  App ;