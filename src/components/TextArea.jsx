import React from 'react';

function TextArea(props) {
    return (
        <div>
            <label htmlFor={ props.name }>{ props.label }</label>
            <textarea
				name={ props.name }
				onChange={ props.onChange }
				className={ props.className }
				placeholder={ props.placeholder }
            />
        </div>
    );
}

export default TextArea;
