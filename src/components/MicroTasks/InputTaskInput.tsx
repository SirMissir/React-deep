import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setTitle: (title:string)=> void;
    title:string;
}


const InputTaskInput = (props:InputPropsType) => {

    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        props.setTitle(event.currentTarget.value)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={props.title}/>
        </div>
    );
};

export default InputTaskInput;