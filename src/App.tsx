import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

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
            <Rating/>
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



export default App;
