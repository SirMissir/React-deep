import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function UnControlledAccordion (props:AccordionPropsType){
    console.log("Accordion rendered")

    let [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.titleValue} onClick={ ()=>{setCollapsed(!collapsed)} }/>

        {!collapsed  && <AccordionBody />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: ()=>void
}

function AccordionTitle(props:AccordionTitlePropsType){
    console.log("AccordionTitle rendered")
    return(
        <h3 onClick={() => { props.onClick }}>{props.title}</h3>
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

export default UnControlledAccordion;