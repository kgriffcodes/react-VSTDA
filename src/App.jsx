import React, { Component } from 'react';
import Header from './components/Header';
import InputArea from './components/InputArea';
import ToDoList from './components/TodoList';

class App extends Component {
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
			[name]: value,
		});
		console.log(this.state);
	}

	handleClick() {
		console.log('clicked!')
	}

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row mt-5 justify-content-around'>
          <div className='col-5'>
            <InputArea
				handleChange={ this.handleChange } 
				handleClick={ this.handleClick }
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
