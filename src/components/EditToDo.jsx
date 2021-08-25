import React from 'react';
import PriorityArea from './PriorityArea';
import TextArea from './TextArea';
import Button from './Button';

class EditToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoText: this.props.title,
			todoPriorityLevel: this.props.priority,
			listId: this.props.listId
		};
		this.combineEditandToggleFunc = this.combineEditandToggleFunc.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	combineEditandToggleFunc() {
		this.props.handleUpdateCallback(this.state);
	}

	handleChange(e) {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
		// console.log(this.state);
	}

	render() {
		return (
			<div className={ this.props.className }>
				<TextArea
					name='todoText'
					className='update-todo-text'
					label='Description'
					onChange={ this.handleChange }
					placeholder={ this.state.todoText }
				/>
				<PriorityArea
					name='todoPriorityLevel'
					className='update-todo-priority ml-3'
					onChange={ this.handleChange }
				/>
				<Button
					className='update-todo mt-4 btn btn-primary'
					onClick={ this.combineEditandToggleFunc }
					text='Save'
				/>
			</div>
		);
	}
}

export default EditToDo;
