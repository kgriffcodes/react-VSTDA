import React from 'react';

function SubHeader(props) {
    return(
        <h3 className={ props.className }>{ props.text }</h3>
    );
}

export default SubHeader;
