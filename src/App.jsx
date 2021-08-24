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
		this.handleRemoveItemFromArr = this.handleRemoveItemFromArr.bind(this);
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

	handleCallback(inputAreaData) {
		// console.log('callback function called', inputAreaData);
		this.setState({
			todoText: inputAreaData.todoText,
			todoPriorityLevel: inputAreaData.todoPriorityLevel
		});
	}

	handleUpdateTodoArr(todoListData) {
		// console.log('callback 1 func called', selectedTodoId, todoListData);
		// replace the old array value with the updated todoItem values
		// step 1: make a copy of the original state
		const todoItemsCopy = this.state.todoItems;
		// step 2: find index of updated component
		const selectedTodoId = todoListData['listId'];
		const objIndex = todoItemsCopy.findIndex((obj => obj.todoId === selectedTodoId));
		// step 3: update the object's name and priority level
		todoItemsCopy[objIndex].todoText = todoListData.todoText;
		todoItemsCopy[objIndex].todoPriorityLevel = todoListData.todoPriorityLevel;
		// step 4: update the array state with updated array values
		this.setState({
			todoItems: todoItemsCopy
		});
	}

	handleRemoveItemFromArr(todoListData) {
		const selectedTodoId = todoListData['listId'];
		console.log('callback 3 func called', selectedTodoId, todoListData);
		// remove the old arr value and update arr
		// step 1: make a copy of the original state
		const todoItemsCopy = this.state.todoItems;
		// step 2: find index of updated component
		const removeIndex = todoItemsCopy.findIndex((obj => obj.todoId === selectedTodoId));
		(removeIndex >= 0) && todoItemsCopy.splice(removeIndex, 1);
		this.setState({
			todoItems: todoItemsCopy
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
				removeCallback={ this.handleRemoveItemFromArr }
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
