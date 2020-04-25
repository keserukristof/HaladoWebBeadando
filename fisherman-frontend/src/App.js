import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';

import Layout from './layout/Layout';

import AboutTheProgram from './pages/AboutTheProgram';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MyOwnCatches from './pages/MyOwnCatches';
import CommunityCatches from './pages/CommunityCatches';

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/time-table' component={CommunityCatches} />
        <Route path='/notes' component={MyOwnCatches} />
        <Route
          path='/about-the-program'
          component={AboutTheProgram}
        />
        <Route path='/about-the-author' component={AboutMe} />
        <Redirect to='/' />
      </Layout>
    </Router>
  );
}

export default App;
