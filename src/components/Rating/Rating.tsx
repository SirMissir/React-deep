import React from "react";

export function Rating( props: any) {
    console.log("Rating rendered")
    
    return (
        <div>
            <Star selected = {true}/>
            <Star selected = {false}/>
            <Star selected = {true}/>
            <Star selected = {true}/>
            <Star selected = {false}/>
        </div>

    );
}

function Star(props:any) {
    console.log("Star rendered")
    if(props.selected === true) {
        return <span><b>Star </b></span>
    }else{
       return <span>Star </span>
    }
}