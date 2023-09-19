import React, {MouseEvent} from "react";
import {Button} from "./Button";



// const myFirstSubscribe = (event:MouseEvent<HTMLButtonElement>) => {
//     console.log('Hello! i`m Vasya!')
// }
// const mySecondSubscribe = (event:MouseEvent<HTMLButtonElement>) => {
//     console.log('Hello! i`m Pasha!')
// }

// const onClickHandler = (name:string) => {
//     console.log(name)
// }

// const foo1 = () => {
//     console.log('100200')
// }
// const foo2 = (num:number) => {
//     console.log(num)
// }

export function ButtonClick (){

    const Button1Foo=(subscribe:string, age:number )=>{
        console.log(subscribe, age)
    };
    const Button2Foo=(subscribe: string )=>{
        console.log(subscribe)
    };
    const Button3Foo=(subscribe: string )=>{
        console.log(subscribe)
    };

    return(
        <div>
            {/*<button onClick={(event)=>{console.log('Hello!')}}>MyYouTubeChanel - 1</button>*/}
            {/*<button onClick={myFirstSubscribe}>MyYouTubeChanel - 1</button>*/}
            {/*<button onClick={mySecondSubscribe}>MyYouTubeChanel - 2</button>*/}
            {/*<button onClick={(event) =>onClickHandler('Kostya')}>MyYouTubeChanel - 2</button>*/}
            {/*<button onClick={foo1}> foo1</button>*/}
            {/*<button onClick={(event) =>foo2(100200)}>foo2</button>*/}
            {/*<button onClick={Button} > MyYouTubeChanel - 1 </button>*/}
            {/*<button > MyYouTubeChanel - 2 </button>*/}


            <Button name={'MyYouTubeChanel - 1'}  callBack={()=>Button1Foo('Im Vasya',21)}/>
            <Button name={'MyYouTubeChanel - 2'}  callBack={()=>Button2Foo ('Im Kostya')}/>
            <Button name={'Stupid Button'}  callBack={()=>Button3Foo ('Im Stupid Button')}/>

        </div>
    );
}


