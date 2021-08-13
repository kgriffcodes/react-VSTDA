import React from 'react';
import SubHeader from './SubHeader';
import TextArea from './TextArea';
import PriorityArea from './PriorityArea';
import Button from './Button';

function InputArea(props) {
	return (
		<div className='p-4 sub-container create-todo'>
			<SubHeader text='Add New Todo' />
			<TextArea
				name='todoText'
				onChange={ props.handleChange }
				label='I want to...'
				className='create-todo-text'
			/>
			<PriorityArea
				name='todoPriorityLevel'
				onChange={ props.handleChange }
			/>
			<Button
				className='mx-auto'
				text='Add to List'
				onClick={ props.handleClick }
			/>
		</div>
	);
}

export default InputArea;
