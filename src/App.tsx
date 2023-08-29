import React from 'react';
import './App.css';

function hello(){

    alert ('Hello IT-camasutra')
};

hello();

function App() {
    console.log("App rendered")
    return (
        <div className='app-wrapper'>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle () {
    console.log("AppTitle rendered")
    return (
        <div>
            This is APP component !
        </div>

    );
}

function Rating () {
    console.log("Rating rendered")
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
    </div>

    );
}

function Star(){
    console.log("Star rendered")
    return(
        <div>Star</div>
    )
}

function Accordion(){
    console.log("Accordion rendered")
    return(
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(){
    console.log("AccordionTitle rendered")
    return(
        <h3>Menu</h3>
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

export default App;
