import React, { Component } from 'react';
import Todo from './todo';

class Todos extends Component {

    handleIncrement = (todo) =>{
        this.props.onIncrement(todo);
    };
    
    handleDecrement = (todo) =>{
        this.props.onDecrement(todo);
    };

    handleDelete = (todo) =>{
        this.props.onDelete(todo);
    };


    render() {
        return (
            <ul className="list-wrap">
                {
                    this.props.todos.map(todo =>(
                        <Todo
                        key={todo.id}
                        todo={todo}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        />
                    ))
                }
            </ul>
        );
    }

}

export default Todos;