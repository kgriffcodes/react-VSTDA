import React, { Component } from 'react';
import Header from './components/Header';
import InputArea from './components/InputArea';
import ToDoList from './components/TodoList';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row mt-5 justify-content-around'>
          <div className='col-5'>
            <InputArea />
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
