import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";





function App() {
    console.log("App rendered")
    return (
        <div className=''>
            {/*<PageTitle title = {"This is APP component !"}/>*/}
            {/*<PageTitle title = {"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value = {3}/>*/}
            <Accordion titleValue = {"Menu"} collapsed = {true}/>
            <Accordion titleValue = {"Users List"} collapsed = {false}/>
            <Rating value = {0}/>
            <Rating value = {1}/>
            <Rating value = {2}/>
            <Rating value = {3}/>
            <Rating value = {4}/>
            <Rating value = {5}/>
            <OnOff value = {true} />
            <OnOff value = {false} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle (props:PageTitlePropsType) {
    console.log("PageTitle rendered")
    return (
        <div>
            {props.title}
        </div>

    );
}



export default App;
