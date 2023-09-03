import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


export type Title ={
    title: string
}


function App() {
    console.log("App rendered")
    return (
        <div className=''>
            <PageTitle title = {"This is APP component !"}/>
            <PageTitle title = {"My friends"}/>
            Article 1
            <Rating value = {3}/>
            <Accordion title = {"Menu"}/>
            <Accordion title = {"Users List"}/>
            Article 2
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
        </div>
    );
}

function PageTitle (props:any) {
    console.log("PageTitle rendered")
    return (
        <div>
            {props.title}
        </div>

    );
}



export default App;
