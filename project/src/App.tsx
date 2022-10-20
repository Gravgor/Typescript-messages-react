import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ChatApp from './compoennts/ChatApp';

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element ={<ChatApp />}/>
    </Routes>
   
    </>
  );
}

export default App;
