import React from "react";


export default function JoinChat(props: any){
    return (
        <div className='chat-window1'>
        <h1 id="pooperChat">pooperChat</h1>
            <input id='input-main' type="text" placeholder="Twój nick.." onChange={(e) => props.setName(e.target.value)}/>
            <button id='button-join' type="submit" style={{marginLeft: '160px', marginTop: '10px'}} onClick={(e) => props.setSubmit(true)}>wejdź</button>
        </div>
    );
}