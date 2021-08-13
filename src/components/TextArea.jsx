import React from 'react';

function TextArea(props) {
    return (
        <div>
            <label>{ props.label }</label>
            <textarea name={ props.name } onChange={ props.onChange } className={ props.className } />
        </div>
    );
}

export default TextArea;
