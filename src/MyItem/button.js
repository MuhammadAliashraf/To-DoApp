import React from "react";

function MyButton(props){
    return (

        <button className="{btn.${props.otherclasses}}">{props.btnValue}</button>

    )
}

export default MyButton;