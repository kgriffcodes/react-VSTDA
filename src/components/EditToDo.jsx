import React from 'react';
import PriorityArea from './PriorityArea';
import TextArea from './TextArea';
import Button from './Button';

function EditToDo(props) {
    return(
        <div className={ props.className }>
            <TextArea className='update-todo-text' label='Description' />
            <PriorityArea className='update-todo-priority' />
            <Button text='Save' />
        </div>
    );
}

export default EditToDo;
