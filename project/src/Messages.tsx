import React,{useState, useMemo,useEffect} from "react";



export default function Messages(messages: any){


    return (
        <div className="App">
        <h1>Wiadomosc</h1>
        <ul style={{listStyle: 'none'}}>
            {messages.mess.map((mess: string) => <li>{mess}</li>)}
        </ul>
        </div>
    );
}