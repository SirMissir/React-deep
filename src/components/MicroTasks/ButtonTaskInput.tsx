import React from 'react';

type ButtonPropsType={
    name: string;
    CallBack:()=> void;
}

const ButtonTaskInput = (props:ButtonPropsType) => {
    const onClickButtonHandler=()=> {
        props.CallBack()
    }
    return (
        <div>
           <button onClick={onClickButtonHandler} >{props.name}</button>
        </div>
    );
};

export default ButtonTaskInput;