import React, {ChangeEvent, useState} from 'react';


type FullInpitPropsType = {
    addMessage:(title:string)=>void;
}


export const FullInput = (props:FullInpitPropsType) => {
    let [title,setTitle] = useState('')
    // console.log(title)


    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

