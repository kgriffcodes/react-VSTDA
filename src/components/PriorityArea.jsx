import React from 'react';

function PriorityArea() {
    return(
        <div>
            <label className='mt-3' htmlFor='priority-level'>How much of a priority is this?</label>
            <select className='create-todo-priority' name='priority-level' id='priority-level'>
                <option value='' disabled selected>Select a priority level</option>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
            </select>
        </div>
    );
}

export default PriorityArea;
