import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <>
                <span className="todo-name">Coding</span>
                <span className="todo-count">0</span>
                <button className="todo-button todo-increase">
                    <i className="fas fa-plus"></i>
                </button>
                <button className="todo-button todo-decrease">
                    <i className="fas fa-minus"></i>
                </button>
                <button className="todo-button todo-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </>
        );
    }
}

export default Todo;