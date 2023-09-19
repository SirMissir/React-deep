import React from "react";

type MicroTasksType = {
    students: StudentType[]
    topCars: CarsType[]
}

type CarsType = {
    manufacturer: string
    model: string
}
type StudentType = {
    id: number
    name: string
    age: number
}


export const MicroTasks = (props: MicroTasksType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentsArray,index)=>{
                return (
                <li key={objectFromStudentsArray.id}>
                    <span>{objectFromStudentsArray.name}</span>
                    <span> age: {objectFromStudentsArray.age}</span>

                </li>
                )}
            )}

            {props.topCars.map((objectFromTopCars,index)=>{
                return(
                    <table>
                        <tr>
                            <th>{objectFromTopCars.manufacturer}</th>
                        </tr>
                        <tr>
                            <th>{objectFromTopCars.model}</th>
                        </tr>
                    </table>
                )
            })}
        </ul>
    );
};