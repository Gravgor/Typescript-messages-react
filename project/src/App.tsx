import React, {useEffect, useState} from 'react';
import Chat from './compoennts/chat/chat';
import JoinChat from './compoennts/joinChat/joinChat';

function App() {


  const [name, setName] = useState<string>('');
  const [submit, setSubmit] = useState<boolean>(false);



  return (
    <>
    {submit ? <Chat userName={name}/> : <JoinChat setName={setName} setSubmit={setSubmit}/>}
    </>
  );
}

export default App;
