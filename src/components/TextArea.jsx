import React from "react";

function TextArea(props){
    return(
        <textarea
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            placeholder={props.placeholder}
            id={props.id}
            wrap="soft">
        </textarea>     
    )
}

export default TextArea