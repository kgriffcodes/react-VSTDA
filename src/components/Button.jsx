import React from 'react';

function Button(props) {
    return(
        <button 
			className='mt-4 btn btn-primary'
			onClick={ props.onClick }
        >
			{ props.text }
		</button>
    );
}

export default Button;
