import React, { Component } from 'react';
import EditToDo from './EditTodo';

class ToDoItem extends Component {
	constructor(props) {
        super(props);
        this.state = {
		};
    }

	render() {
		return (
			<div className='pt-2 pb-2 to-do-item justify-content-between'>
				<h6>{ this.props.title }</h6>
				<span>
					<a className='edit-todo'>
						<i className='fas fa-edit'></i>
					</a>
					<a className='delete-todo'>
						<i className='fas fa-trash-alt'></i>
					</a>
					<EditToDo className='displayNone' />    
				</span>
			</div>    
		);
	}
}	

export default ToDoItem;
