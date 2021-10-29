import React from 'react';
import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Header from '../Header/Header';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {

  return (
    <div className='App'>
      <Header/>
      <Feeling/>
      <Understanding/>
      <Support/>
      <Comments/>

    </div>
  );
}


export default App;
