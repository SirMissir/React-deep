import React, {useState} from 'react';
import {FullInput} from "./FullInput";

export function MicroTaskInput() {
    let [message, setMessage] = useState([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'},
    ])

    return(
        <div>
            <FullInput/>
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {message.map((el,index: number) =>{
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )

}

