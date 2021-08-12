/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from 'react';
import SubHeader from './SubHeader';
import TextArea from './TextArea';
import PriorityArea from './PriorityArea';
import Button from './Button';

class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			todoText: '',
			todoPriorityLevel: 0
		};
    }

    render() {
        return (
            <div className='p-4 sub-container create-todo'>
                <SubHeader text='Add New Todo' />
                <TextArea label='I want to...' className='create-todo-text' />
                <PriorityArea />
                <Button className='mx-auto' text='Add to List' />
            </div>
        );
    }
}

export default InputArea;
