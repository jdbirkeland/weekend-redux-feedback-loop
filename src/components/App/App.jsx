import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feelings from '../Feeling/Feeling';
import Header from '../Header/Header';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Feedback from '../Feedback/Feedback';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import LastPage from '../LastPage/LastPage';



function App() {

  return (
    <Router>
      <div className='App'>
        <Route path="/" exact>
          <Header />
          <Feelings />
        </Route>

        <Route path="/Support">
          <Header />
          <Support />
        </Route>

        <Route path="/Understanding">
          <Header />
          <Understanding />
        </Route>

        {/* <Route path="/Support">
          <Header />
        <Support />
        </Route> */}

        <Route path="/Comments">
          <Header />
          <Comments />
        </Route>

        <Route path="/Feedback">
          <Feedback />
        </Route>

        <Route path="/LastPage">
          <LastPage />
        </Route>

      </div>
    </Router>
  );
}


export default App;
