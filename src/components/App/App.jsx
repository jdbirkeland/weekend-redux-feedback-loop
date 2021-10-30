import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feelings from '../Feeling/Feeling';
import Header from '../Header/Header';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Feedback from '../Feedback/Feedback';

function App() {

  return (
    <div className='App'>
      <Header/>
      <Feelings/>
      <Understanding/>
      <Support/>
      <Comments/>
      <Feedback/>

    </div>
  );
}


export default App;
