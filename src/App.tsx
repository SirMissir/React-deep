import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff"
import {MicroTasks} from "./components/MicroTasks/MicroTasks";
import {ButtonClick} from "./components/MicroTasks/MicroTaskButton";
import {State} from "./components/MicroTasks/UseState";
import {Money} from "./components/MicroTasks/ArrayMoneyUseState";
import {MicroTaskInput} from "./components/MicroTasks/MicroTaskInput";
import UncontrolledAccordion from "./components/UnControlledAccordion/UncontrolledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Count from "./components/Count/Count";






function App() {
    let[students, setStudents] = useState([
        {id: 1, name: "Kostya", age: 23},
        {id: 2, name: "Sasha", age: 23},
        {id: 3, name: "Sasha", age: 23},
        {id: 4, name: "Sasha", age: 23},
        {id: 5, name: "Kostya", age: 23}
    ]);
    const topCars = [//MicroTask Map sprint 01
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'},
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ];
    let [accordionCollapsed, setAccordionCollapsed]= useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [h, seth] = useState(false);
    let nawBarStyle = {
        height: h ? "200px" : "0px"
    }
    // const NawBarStyle = {
    //     display: "flex",
    //     flex-direction: "column",
    //     gap: "10px",
    //     width: "100%",
    //     padding-top: "20px",
    //     padding-bottom: "100px",
    //     border-bottom: "1px solid #d3d3d3",
    //     border-top: "1px solid #d3d3d3"
    // };


    return (
        <div className={'App'}>

            <div className={'hwTitle'} onClick={()=>seth(!h)} >React-deap #1</div>
            <div style={nawBarStyle} className={'hw'}>
                <Accordion titleValue = {"Menu"} collapsed = {accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
                <Accordion titleValue = {"Users List"} collapsed = {accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            </div>

            <div className={'hwTitle'}>React-deap #2</div>
            <div className={'desk'}>
                <div className={'hw'}>
                    <Rating value = {3}/>
                    <Rating value = {0}/>
                    <Rating value = {1}/>
                    <Rating value = {2}/>
                    <Rating value = {3}/>
                    <Rating value = {4}/>
                    <Rating value = {5}/>
                </div>
                <div className={'hw'}>
                    <UnControlledRating/>
                    <UnControlledRating/>
                    <UnControlledRating/>
                    <UnControlledRating/>
                    <UnControlledRating/>
                    <UnControlledRating/>
                    <UnControlledRating/>

                </div>


            </div>

            <div className={'hwTitle'}>MicroTasks #1</div>
            <div className={'hw'}>
                <MicroTasks students = {students} topCars = {topCars}/>
            </div>

            <div className={'hwTitle'}>React-deap #3</div>
            <div className={'hw'}>
                <ButtonClick/>
            </div>

            <div className={'hwTitle'}>React-deap #4</div>
            <div className={'hw'}>
                <State/>
            </div>

            <div className={'hwTitle'}>React-deap #5</div>
            <div className={'hw'}>
                <Money/>
            </div>

            <div className={'hwTitle'}>MicroTasks #2</div>
            <div className={'hw'}>
                <MicroTaskInput/>
                <State />
            </div>

            <div className={'hwTitle'}>React-deap #6</div>
            <div className={'desk'}>
               <div className={'hw'}>
                   <OnOff  />
                   <OnOff  />
                   <OnOff  />
               </div>
                <div className={'hw'}>
                   <UncontrolledAccordion titleValue = {"Menu"}/>
                   <UncontrolledAccordion titleValue = {"Users"}/>
               </div>
            </div>

            <div className={'hwTitle'}>React-deap #8</div>
            <div className={'desk'}>
               <div className={'hw'}>
                   <UncontrolledOnOff  on={switchOn} onChange={setSwitchOn} />
               </div>
            </div>

            <div className={'hwTitle'}>Counter Home</div>
            <div className={'desk'}>
               <div className={'hw'}>
                   <Count/>
               </div>
            </div>
        </div>
    );
}
export default App;
