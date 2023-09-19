import React from "react";

type NameButtonType = {
    name:string
    callBack:()=>void
}



export const Button = (props:NameButtonType) => {

    const onClickHandler=()=>{
        props.callBack()
    }

    return (
        <button onClick = {onClickHandler}> {props.name} </button>
    )

}