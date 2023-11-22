import React from "react";

export type CollapsedRatingType = boolean


type AccordionPropsType = {
    titleValue: string
    collapsed: CollapsedRatingType
    onChange: ()=> void
}




function Accordion (props:AccordionPropsType){
    console.log("Accordion rendered")
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
        {!props.collapsed  && <AccordionBody />}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onChange: ()=> void
}

function AccordionTitle(props:AccordionTitlePropsType){
    console.log("AccordionTitle rendered")
    return(
        <h3 onClick={ props.onChange }>{props.title}</h3>
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