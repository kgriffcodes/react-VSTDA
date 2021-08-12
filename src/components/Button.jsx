import React from 'react';

function Button(props) {
    return(
        <button className='mt-4 btn btn-primary'>{ props.text }</button>
    );
}

export default Button;
