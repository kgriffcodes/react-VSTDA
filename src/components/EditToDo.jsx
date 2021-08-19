import React from 'react';
import PriorityArea from './PriorityArea';
import TextArea from './TextArea';
import Button from './Button';

class EditToDo extends React.Component {
	constructor(props) {
		super(props);
		this.combineEditandToggleFunc = this.combineEditandToggleFunc.bind(this);
	}

	combineEditandToggleFunc() {
		this.props.handleUpdateCallback();
		this.props.toggleEditTodo();
	}

	render() {
		return (
			<div className={ this.props.className }>
				<TextArea className='update-todo-text' label='Description' />
				<PriorityArea className='update-todo-priority' />
				<Button
					onClick={ this.combineEditandToggleFunc }
					text='Save'
				/>
			</div>
		);
	}
}

export default EditToDo;
