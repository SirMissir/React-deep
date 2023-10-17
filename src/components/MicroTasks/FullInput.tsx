import React, {ChangeEvent, useState} from 'react';


type MMM = {
    callBack:any;
}


export const FullInput = () => {
    let [title,setTitle] = useState('')
    // console.log(title)


    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>,props:MMM) =>{
        setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={()=>{<callBack/>}}>+</button>
        </div>
    );
};

