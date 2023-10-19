import React, {useState} from 'react';
import {FullInput} from "./FullInput";
import ButtonTaskInput from "./ButtonTaskInput";
import InputTaskInput from "./InputTaskInput";

export function MicroTaskInput() {
    let [message, setMessage] = useState([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'},
    ])

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage,...message])
    }


    // @ts-ignore
    return (
        <div>
            <InputTaskInput/>
            <ButtonTaskInput name={'+'} CallBack={()=>{}}/>

            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((el, index: number) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )

}

