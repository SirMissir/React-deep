import React from "react";
import s from './OnOff.module.css';

type OnOffPropsType = {
    value: boolean
}

function OnOff (props:OnOffPropsType) {
    return <div>
        {props.value && <ChOn/>}
        {props.value && <ChOff/>}
        {props.value && <ChOff/>}
    </div>
}

function ChOn(){
    return <div>
        <span className={s.wrapperOn}>on</span>
        <span className={s.wrapper}>off</span>
        <span className={s.circleOn}>off</span>
    </div>
}
function ChOff(){
    return <div>
        <span className={s.wrapper}>on</span>
        <span className={s.wrapperOff}>off</span>
        <span className={s.circleOff}>off</span>
    </div>
}





export default OnOff;