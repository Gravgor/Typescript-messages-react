import React, {useState} from 'react';
import Messages from './Messages';


function App() {


  const [messages, setMessages] = useState<string[]>([]);
  const [mess, setMess] = useState<string>("");


  const handleSend = () => {
    setMessages([...messages, mess])
    setMess('')
  }


  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '25px'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
        <h1>Wpisz wiadomość</h1>
        <input type="text" value={mess} onChange={(e) => setMess(e.target.value)} />
        <button onClick={() => handleSend()}>Wyślij</button>
      </div>
      <Messages mess={messages}/>
      
    </div>
  );
}

export default App;
