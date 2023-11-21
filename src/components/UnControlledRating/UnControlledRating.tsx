import React, {useState} from "react";

type RatingPropsType = {
    // value: 0|1|2|3|4|5
}
type StarPropsType = {
    selected: boolean
}
export function UnControlledRating() {
    console.log("Rating rendered")

    let [value, setValue]=useState(0)

return(
    <div>
        <Star selected = {value > 0} setValue = {setValue}/>
        <Star selected = {value > 1} setValue = {setValue}/>
        <Star selected = {value > 2} setValue = {setValue}/>
        <Star selected = {value > 3} setValue = {setValue}/>
        <Star selected = {value > 4} setValue = {setValue}/>
        <Star selected = {value > 5} setValue = {setValue}/>
    </div>
)
}

function Star(props:StarPropsType) {

    return  <span> { props.selected ? <b>star</b> : "star"}</span>

}