import React from "react";
import {Title} from "../../App";



type TitlePropsType = {
    title: string
}


function Accordion(props:TitlePropsType){
    console.log("Accordion rendered")
    return(
        <div>
            <AccordionTitle title = {props.title}/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props:any){
    console.log("AccordionTitle rendered")
    return(
        <h3>{props.title}</h3>
    )
}

function AccordionBody(){
    console.log("AccordionBody rendered")
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;