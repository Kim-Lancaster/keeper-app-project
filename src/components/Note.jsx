import React from 'react';
import Delete from './Delete';

function Note(props){
    return (<div className='note' id={props.id}>
        <Delete delete={props.onDelete} id={props.id} />
        <h2>{props.header}</h2>
        <p>{props.body}</p>
    </div>);
}

export default Note