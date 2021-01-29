import React, { Component } from 'react';
import Todo from './todo';

class Todos extends Component {
    state = {
        todos:[
            { id : 1, name : "React", count : 0},
            { id : 2, name : "Three.js", count : 0},
            { id : 3, name : "jQuery", count : 0},
        ],
    };

    handleIncrement = (todo) =>{
        const todos = [...this.state.todos];
        const index = todos.indexOf(todo);
        todos[index].count++;
        this.setState({todos});
    };
    
    handleDecrement = (todo) =>{
        const todos = [...this.state.todos];
        const index = todos.indexOf(todo);
        const count = todos[index].count - 1;
        todos[index].count = count < 0 ? 0 : count;
        this.setState({todos});
    };

    handleDelete = (todo) =>{
        const todos = this.state.todos.filter(item =>item.id !== todo.id)
        this.setState({todos});
    };


    render() {
        return (
            <ul>
                {
                    this.state.todos.map(todo =>(
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