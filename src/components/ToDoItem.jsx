/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import classNames from 'classnames';
import EditToDo from './EditTodo';

class ToDoItem extends Component {
	constructor(props) {
        super(props);
        this.state = {
			title: this.props.title,
			priority: this.props.priority,
			displayEdit: this.props.displayEdit,
			listId: this.props.listId,
			isCompleted: this.props.isCompleted
		};
		this.updateCompletedStatus = this.updateCompletedStatus.bind(this);
		this.passAlongDataToList = this.passAlongDataToList.bind(this);
		this.toggleEditTodo = this.toggleEditTodo.bind(this);
		this.handleUpdateCallback = this.handleUpdateCallback.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

	updateCompletedStatus() {
		const isCompletedCopy = this.state.isCompleted;
		this.setState({
			isCompleted: !isCompletedCopy
		}, this.props.updateCompletedStatus(this.state));
	}

	passAlongDataToList(editedStateVals) {
		this.toggleEditTodo();
		this.props.handleTodoData(editedStateVals);
	}

	handleUpdateCallback(editedTodoData) {
		// console.log('callback 3 function called', editedTodoData);
		this.setState({
			title: editedTodoData.todoText,
			priority: editedTodoData.todoPriorityLevel
		}, this.passAlongDataToList(editedTodoData));
	}

	toggleEditTodo() {
		// console.log('toggle');
		this.setState((prevState) => {
			let newDisplay = prevState.displayEdit;
			newDisplay = !newDisplay;
			return {
				displayEdit: newDisplay
			};
		 });
	}

	handleDeleteClick() {
		this.props.removeCallback(this.state);
	}

	render() {
		const divClassNames = classNames(
			'pt-2',
			'pb-2',
			'to-do-item',
			'justify-content-between',
			'success'
		);
		const bgClass = this.state.priority == 1 ? 'greenBg' : this.state.priority == 2 ? 'yellowBg' : this.state.priority == 3 ? 'redBg' : '';
		const strikeText = this.state.isCompleted ? 'strikeText' : '';
		return (
			<li className={`${divClassNames} ${bgClass} pt-3`}>
				<span className='d-flex ml-4 container-checkbox'>
					<input type='checkbox' onClick={ this.updateCompletedStatus } />
					<span className='checkmark' />
					<p className={ `${strikeText} pl-3` }>{ this.state.title }</p>
				</span>
				<span className='pr-4'>
					<a onClick={ this.toggleEditTodo } className='edit-todo pr-2'>
						<i className='fas fa-edit' />
					</a>
					<a onClick={ this.handleDeleteClick } className='delete-todo'>
						<i className='fas fa-trash-alt' />
					</a>
					<EditToDo
						listId={ this.state.listId }
						handleUpdateCallback={ this.handleUpdateCallback }
						className={ ` ${this.state.displayEdit ? '' : 'displayNone'}` }
						passAlongDataToList={ this.passAlongDataToList }
					/>
				</span>
			</li>
		);
	}
}

export default ToDoItem;
