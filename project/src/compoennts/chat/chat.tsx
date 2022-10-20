import React, {useEffect, useMemo, useState} from 'react';
import Messages from './Messages';


function Chat(props: any) {

    
  const [name, setName] = useState<string>('');
  const [timeStamp, setTimeStamp] = useState<number>(Date.now());
  const [message, setMessage] = useState<string>('');
  const [usersMessages, setUsersMessages] = useState<User[]>([]);

  useMemo(() => {
    setName(props.userName);
  },[props.userName])



    interface User {
        name: string;
        timeStamp: number;
        message: string;
    }

    const newUser: User = {
        name: name,
        timeStamp: timeStamp,
        message: message
      }


      return (
        <div className='chat-window'>
           <h1 id='pooperChat'>pooperChat</h1>
              <Messages user={usersMessages}/>
              <div className='footer'>
                 <input id='input-main' type="text" placeholder="Wiadomość.." onChange={(e) => setMessage(e.target.value)} style={{position: 'relative', left: '100px'}}/>
                 <button id='button-send' type="submit" style={{marginLeft: '160px', marginTop: '10px'}} onClick={(e) => setUsersMessages([...usersMessages, newUser])}>wyślij</button>
              </div>
      
       </div>
      )


}

export default Chat;