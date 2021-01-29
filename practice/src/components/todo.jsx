import React, { Component } from 'react';

class Todo extends Component {

    handleIncrement = () =>{
        this.props.onIncrement(this.props.todo);
    };
    
    handleDecrement = () =>{
        this.props.onDecrement(this.props.todo);
    };

    handleDelete = () =>{
        this.props.onDelete(this.props.todo);
    };

    render() {
        const {name, count} = this.props.todo;

        return (
            <li className="todo">
                <span className="todo-name">{name}</span>
                <span className="todo-count">{count}</span>
                <button className="todo-button todo-increase"  onClick={this.handleIncrement}>
                    <i className="fas fa-plus"></i>
                </button>
                <button className="todo-button todo-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus"></i>
                </button>
                <button className="todo-button todo-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Todo;