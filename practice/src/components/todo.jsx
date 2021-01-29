import React, { Component } from 'react';

class Todo extends Component {

    state = {
        count : 0
    };

    handleIncrement = () =>{
        this.setState({ count : this.state.count + 1});
    };
    
    handleDecrement = () =>{
        const count = this.state.count - 1;
        this.setState({ count : count < 0 ? 0 : count});
    };

    render() {
        return (
            <li className="todo">
                <span className="todo-name">Coding</span>
                <span className="todo-count">{this.state.count}</span>
                <button className="todo-button todo-increase"  onClick={this.handleIncrement}>
                    <i className="fas fa-plus"></i>
                </button>
                <button className="todo-button todo-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus"></i>
                </button>
                <button className="todo-button todo-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Todo;