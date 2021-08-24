/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import EditToDo from './EditTodo';

class ToDoItem extends Component {
	constructor(props) {
        super(props);
        this.state = {
			title: this.props.title,
			priority: this.props.priority,
			displayEdit: this.props.displayEdit,
			listId: this.props.listId
		};
		this.passAlongDataToList = this.passAlongDataToList.bind(this);
		this.toggleEditTodo = this.toggleEditTodo.bind(this);
		this.handleUpdateCallback = this.handleUpdateCallback.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.pickBgColor = this.pickBgColor.bind(this);
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

	pickBgColor() {
		let bgColor = 'pinkBg';
		if (this.state.priority === 1) {
			bgColor = 'greenBg';
		} else if (this.state.priority === 2) {
			bgColor = 'yellowBg';
		} else if (this.state.priority === 3) {
			bgColor = 'redBg';
		}
		return bgColor;
	}

	render() {
		return (
			<div className={ 'pt-2 pb-2 to-do-item justify-content-between ' + this.pickBgColor() }>
				<h6>{ this.state.title }</h6>
				<span>
					<a onClick={ this.toggleEditTodo } className='edit-todo'>
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
			</div>
		);
	}
}

export default ToDoItem;
