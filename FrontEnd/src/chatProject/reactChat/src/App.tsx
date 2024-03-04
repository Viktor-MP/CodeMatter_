import React from 'react';
import './App.css';
import PersonalMap from './Components/PersonalMap/PersonalMap';
import PersonalChat from './Components/PersonalChat/PersonalChat';

function App() {
  return (
    <div className="App">
      <PersonalMap  className='personalMap_'/>
      <PersonalChat  className='personalChat_'/>

    </div>
  );
}

export default App;
