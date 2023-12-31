import React, {useState, MouseEvent} from "react";
import {Button} from "./Button";

 type FilterType = 'All' | 'RUBLS'|'Dollars'
export function Money () {

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [filter,setFilter]=useState<FilterType>('All')

    let currentMoney =money;
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots ==='Dollars');
    }
    if (filter === 'RUBLS') {
        currentMoney=money.filter((filteredMoney)=>filteredMoney.banknots === 'RUBLS');
    }




    const onClickFilterHandler=(nameButton: FilterType)=>{
        setFilter(nameButton)
    }
    return(
        <>
            <ul>
            {currentMoney.map((objFromMoneyArr,index)=>{
                return(
                    <li key={index}>
                        <span>banknots: {objFromMoneyArr.banknots}</span>
                        <span>value: {objFromMoneyArr.value}</span>
                        <span>number: {objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>

            <div style={{marginLeft: '40px'}}>
                <Button name={'All'}     callBack={()=>onClickFilterHandler('All')}/>
                <Button name={'RuBL'}    callBack={()=>onClickFilterHandler('RUBLS')}/>
                <Button name={'Dollar'}  callBack={()=>onClickFilterHandler('Dollars')}/>
            </div>

        </>
    )
}