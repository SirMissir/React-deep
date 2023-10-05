// import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff"
// import {MicroTasks} from "./components/MicroTasks/MicroTasks";
import {ButtonClick} from "./components/MicroTasks/MicroTaskButton";
import {State} from "./components/MicroTasks/UseState";
import {Money} from "./components/MicroTasks/ArrayMoneyUseState";
import {MicroTaskInput} from "./components/MicroTasks/MicroTaskInput";





function App() {

    // let[students, setStudents] = useState([
    //     {id: 1, name: "Kostya", age: 23},
    //     {id: 2, name: "Sasha", age: 23},
    //     {id: 3, name: "Sasha", age: 23},
    //     {id: 4, name: "Sasha", age: 23},
    //     {id: 5, name: "Kostya", age: 23}
    // ]);
    // const topCars = [//MicroTask Map sprint 01
    //     {manufacturer:'BMW', model:'m5cs'},
    //     {manufacturer:'Mercedes', model:'e63s'},
    //     {manufacturer:'Audi', model:'rs6'},
    //     {manufacturer:'BMW', model:'m5cs'},
    //     {manufacturer:'Mercedes', model:'e63s'},
    //     {manufacturer:'Audi', model:'rs6'}
    // ];

    console.log("App rendered")
    return (
        <div className={'app-wrapper'}>
            {/*<PageTitle title = {"This is APP component !"}/>*/}
            {/*<PageTitle title = {"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value = {3}/>*/}
            {/*<Accordion titleValue = {"Menu"} collapsed = {true}/>*/}
            {/*<Accordion titleValue = {"Users List"} collapsed = {false}/>*/}
            {/*<Rating value = {0}/>*/}
            {/*<Rating value = {1}/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {4}/>*/}
            {/*<Rating value = {5}/>*/}
            {/*<OnOff value = {true} />*/}
            {/*<OnOff value = {false} />*/}
            {/*<MicroTasks students = {students} topCars = {topCars}/>*/}
            <ButtonClick/>
            {/*<State/>*/}
            {/*<Money/>*/}
            <MicroTaskInput/>
        </div>
    );
}

// type PageTitlePropsType = {
//     title: string
// }

// function PageTitle (props:PageTitlePropsType) {
//     console.log("PageTitle rendered")
//     return (
//         <div>
//             {props.title}
//         </div>
//
//     );
// }



export default App;
