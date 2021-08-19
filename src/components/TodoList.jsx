/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
import React from 'react';
import ToDoItem from './ToDoItem';
import SubHeader from './SubHeader';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoItems: this.props.todoItems
		};
	}

	render() {
		const { todoItems } = this.props;
		return (
			<div className='sub-container to-do-list'>
				<SubHeader text='To Do List' />
				{todoItems.map(todo => {
					return (
						<ToDoItem
							title={ todo.todoText }
							priority={ todo.todoPriorityLevel }
							key={ todo.todoId }
							displayEdit={ todo.todoDisplayEdit }
						/>
					);
				})}
			</div>
		);
	}
}

export default ToDoList;
