import React, {useState} from 'react';
import s from './count.module.css';


const Count = () => {

    let [a, setA] = useState(0)

    let onClickHandler = () => {
        setA(++a)
    }
    let onClickDawnHandler = () => {
        setA(0)
    }


    return (
        <div className={s.wrapper}>
            <div className={s.count}>
                <div className={s.disp}>{a}</div>
                <div className={s.butt}>
                    <button  onClick={onClickHandler}>INC</button>

                    <button  onClick={onClickDawnHandler}>REC</button>
                </div>


            </div>
        </div>
    );
};

export default Count;