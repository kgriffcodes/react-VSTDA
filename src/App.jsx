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
		this.handleUpdateTodoArr = this.handleUpdateTodoArr.bind(this);
    }

	handleAddTodo(inputAreaData) {
		const newToDo = {
			todoText: inputAreaData.todoText,
			todoPriorityLevel: inputAreaData.todoPriorityLevel,
			todoId: inputAreaData.todoText,
			todoDisplayEdit: false
		};

		this.setState((prevState) => {
			const newToDos = prevState.todoItems;
			newToDos.push(newToDo);
			return {
				todoItems: newToDos
			};
		}
		// , () => console.log(this.state.todoItems)
		);
	}

	handleUpdateTodoArr(todoListData) {
		console.log('callback 1 func called', todoListData);
		// const selectedTodoId = todoData['listId'];
		//replace the old array value with the updated todoItem values
		// const updatedArr = todoItemsCopy.map(obj => todoItemsCopy.find(o => o.todoId === selectedTodoId) || obj);
		// this.setState((prevState) => {
		// });
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
            <ToDoList
				parentCallback={ this.handleUpdateTodoArr }
				todoItems={ this.state.todoItems }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
