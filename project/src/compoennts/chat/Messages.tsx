import React,{useState, useMemo,useEffect} from "react";



export default function Messages(user: any){


    return (
        <div>
        <ul id='messages' style={{listStyle: 'none', height: '350px', overflowY: 'scroll'}}>
            {user.user.map((user: any) => (
                <li key={user.timeStamp}>
                    <span id='name' >{user.name}</span> <span style={{color: 'gray'}}>napisał:</span> {user.message}
                </li>
            ))}
        </ul>
        </div>
    );
}