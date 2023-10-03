import React, {useState} from 'react';

function MicroTaskInput() {
    let [message, setMessage] = useState([
        {message: 'message 1'},
        {message: 'message 2'},
        {message: 'message 3'},
    ])

    return(
        <div>
            <div>
                <input/>
                <button>+</button>
            </div>
            {message.map((el: ,index) =>{
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )

}

