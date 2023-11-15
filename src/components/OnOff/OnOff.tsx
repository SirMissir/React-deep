import React from "react";
import s from './OnOff.module.css';

type OnOffPropsType = {
    value: boolean
}



function OnOff (props:OnOffPropsType) {

    const onStyle ={
        width: "30px",
        height: "20px",
        border:"1px solid black",
        display:"inline-block",
        padding:"2px",
        backgroundColor:props.value ? "green" : " white"
    }
    const offStyle ={
        width: "30px",
        height: "20px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"2px",
        padding:"2px",
        backgroundColor:props.value ? "white" : " red"
    }
    const indicatorStyle ={
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border:"1px solid black",
        display:"inline-block",
        marginLeft:"5px",
        backgroundColor:props.value ? "green" : " red"
    };


    return <div>
        <div style={onStyle}>on</div>
        <div style={offStyle}>off</div>
        <div style={indicatorStyle}></div>
    </div>
}







export default OnOff;