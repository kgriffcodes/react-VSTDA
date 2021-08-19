import React, { Component } from 'react';
import SubHeader from './SubHeader';
import TextArea from './TextArea';
import PriorityArea from './PriorityArea';
import Button from './Button';

class InputArea extends Component {
	constructor(props) {
        super(props);
        this.state = {
			todoText: '',
			todoPriorityLevel: 0
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
    }

	handleChange(e) {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
		// console.log(this.state);
	}

	handleClick() {
		this.props.parentCallback(this.state);
		this.props.handleAddTodo(this.state);
	}

	render() {
		return (
			<div className='p-4 sub-container create-todo'>
				<SubHeader text='Add New Todo' />
				<TextArea
					name='todoText'
					onChange={ this.handleChange }
					label='I want to...'
					className='create-todo-text'
				/>
				<PriorityArea
					name='todoPriorityLevel'
					onChange={ this.handleChange }
				/>
				<Button
					className='mx-auto'
					text='Add to List'
					onClick={ this.handleClick }
				/>
			</div>
		);
	}
}

export default InputArea;
