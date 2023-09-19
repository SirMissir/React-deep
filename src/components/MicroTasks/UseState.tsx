import React, { useState} from "react";

export function State (){
    let [a, setA]=useState(1)

    const onClickHandler=()=>{
        setA(++a);
        console.log(a)
    };

    const onClickDownHandler=()=>{
        setA(0);
        console.log()
    }

    return(
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Num</button>
            <button onClick={onClickDownHandler}>Null</button>
        </div>
    )
}