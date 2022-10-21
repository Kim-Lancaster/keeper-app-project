import React from "react";

function Delete(props){
    return <div className="delete" onClick={() => { props.delete(props.id)}}>X</div>
}

export default Delete