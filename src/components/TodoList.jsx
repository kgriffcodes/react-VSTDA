/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
import React from 'react';
import ToDoItem from './ToDoItem';
import SubHeader from './SubHeader';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			priority: 0,
			listId: '',
			todoItems: this.props.todoItems
		};
		this.handleTodoData = this.handleTodoData.bind(this);
		this.removeCallback = this.removeCallback.bind(this);
		this.updateCompletedStatus = this.updateCompletedStatus.bind(this);
	}

	handleTodoData(todoData) {
		// console.log('callback 2 func called', todoData);
		this.setState({
			title: todoData.todoText,
			priority: todoData.todoPriorityLevel,
			listId: todoData.listId
		}, this.props.parentCallback(todoData));
	}

	removeCallback(todoData) {
		this.props.removeCallback(todoData);
	}

	updateCompletedStatus(todoData) {
		this.props.updateCompletedStatus(todoData);
	}

	render() {
		const { todoItems } = this.props;
		return (
			<div className='sub-container to-do-list'>
				<SubHeader className='pt-3 pl-3' text='To Do List' />
				<ul>
					{todoItems.map(todo => {
						return (
							<ToDoItem
								updateCompletedStatus={ this.updateCompletedStatus }
								removeCallback={ this.removeCallback }
								handleTodoData={ this.handleTodoData }
								title={ todo.todoText }
								priority={ todo.todoPriorityLevel }
								isCompleted={ todo.todoIsCompleted }
								key={ todo.todoId }
								listId={ todo.todoId }
								displayEdit={ todo.todoDisplayEdit }
							/>
						);
					})}
				</ul>	
			</div>
		);
	}
}

export default ToDoList;
