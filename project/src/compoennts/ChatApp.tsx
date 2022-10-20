import React, {useEffect, useState} from 'react';
import Chat from './chat/chat';
import JoinChat from './joinChat/joinChat';

function ChatApp() {

  const [name, setName] = useState<string>('');
  const [submit, setSubmit] = useState<boolean>(false);

  return (
    <>
    {submit ? <Chat userName={name}/> : <JoinChat setName={setName} setSubmit={setSubmit}/>}
    </>
  );
}

export default ChatApp;
