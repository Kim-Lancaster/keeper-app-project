import React from "react";

function Input(props){
    return(
        <input
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            id={props.id}
            />
    )
}

export default Input