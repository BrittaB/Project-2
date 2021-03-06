import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Trending from './Pages/Trending/Trend';
import Collaborate from './Pages/Collaborate/Collaborate';
import Projects from './Pages/Projects/Projects';
import userProfile from './Pages/userProfile/userProfile';
import Contact from './Pages/Contact/Contact';
import pageNotFound from './Pages/404pnf/404pnf';
function Main() {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/trending' component={Trending}></Route>
      <Route exact path='/collaborate' component={Collaborate}></Route>
      <Route exact path='/projects' component={Projects}></Route>
      <Route exact path='/userProfile' component={userProfile}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/pageNotFound' component={pageNotFound}></Route>
    </Switch>
  );
}

export default Main;