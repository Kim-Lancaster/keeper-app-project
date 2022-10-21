import React, { useState } from "react";

function Button(props){

    const [mouseOver, setMouseOver] = useState(false);

    function handleMouseOver(){
        setMouseOver(true)
    }

    function handleMouseOut(){
        setMouseOver(false)
    }

    return <button
        onClick={props.onClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={mouseOver&&"hover-effect"}
        >{props.content}</button>
}

export default Button;