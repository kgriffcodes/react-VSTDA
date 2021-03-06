import React from 'react';

function PriorityArea(props) {
    return (
        <div>
            <label className='mt-3' htmlFor='todoPriorityLevel'>
				How much of a priority is this?
			</label>
            <select
				name={ props.name }
				onChange={ props.onChange }
				className={ props.className }
				id='priority-level'
				defaultValue='DEFAULT'
            >
                <option value='DEFAULT' disabled>Select a priority level</option>
                <option value='1'>Low</option>
                <option value='2'>Medium</option>
                <option value='3'>High</option>
            </select>
        </div>
    );
}

export default PriorityArea;
