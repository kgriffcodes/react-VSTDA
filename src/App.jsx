import React, { Component } from 'react';
import Header from './components/Header';
import InputArea from './components/InputArea';
import ToDoList from './components/TodoList';

class App extends Component {
	constructor(props) {
        super(props);
        this.state = {
			todoItems: [],
			initTodoText: '',
			initTodoPriorityLevel: 0
		};
		this.handleAddTodo = this.handleAddTodo.bind(this);
		this.handleCallback = this.handleCallback.bind(this);
    }

	handleAddTodo() {
		const newToDo = {
			todoText: this.state.todoText,
			todoPriorityLevel: this.state.todoPriorityLevel,
			todoId: this.state.todoItems.length + 1
		};

		// const newToDoItems = [[...this.state.todoItems].push(newToDo)];

		this.setState(prevState => {
			return {
				todoItems: [...prevState.todoItems, newToDo]
			};
		});
		console.log(this.state.todoItems);
	}

	handleCallback(inputAreaData) {
		// console.log('callback function called', inputAreaData);
		this.setState({
			todoText: inputAreaData.todoText,
			todoPriorityLevel: inputAreaData.todoPriorityLevel
		});
	}

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row mt-5 justify-content-around'>
          <div className='col-5'>
           <InputArea
		   		parentCallback={ this.handleCallback }
				handleAddTodo={ this.handleAddTodo }
           />
          </div>
          <div className='col-7'>
            <ToDoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
