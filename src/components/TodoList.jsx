/* eslint-disable react/jsx-indent */
/* eslint-disable keyword-spacing */
/* eslint-disable no-tabs */
import React from 'react';
import ToDoItem from './ToDoItem';
import SubHeader from './SubHeader';

class ToDoList extends React.Component {
	render() {
		return(
			<div className='sub-container to-do-list'>
				<SubHeader text='To Do List' />
				<ToDoItem title='Build a Rocket Ship' />
				<ToDoItem title='Laundry' />
			</div>
		);
	}
}

export default ToDoList;
