import React from 'react';

function TextArea(props) {
    return(
        <div>
            <label>{ props.label }</label>
            <textarea className={ props.className }></textarea>
        </div>
    );
}

export default TextArea;
