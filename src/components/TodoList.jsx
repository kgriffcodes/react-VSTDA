import React from 'react';
import ToDoItem from './ToDoItem';
import SubHeader from './SubHeader';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoArr: [],
		};
	}

	render() {
		return (
			<div className='sub-container to-do-list'>
				<SubHeader text='To Do List' />
				<ToDoItem title='Build a Rocket Ship' />
				<ToDoItem title='Laundry' />
			</div>
		);
	}
}

export default ToDoList;
