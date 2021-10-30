import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feelings from '../Feeling/Feeling';
import Header from '../Header/Header';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <Header/>
      <Feelings/>
      <Understanding/>
      <Support/>
      <Comments/>

    </div>
  );
}


export default App;
