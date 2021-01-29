import React, { Component } from 'react';
import Todo from './todo';
import TodoAddForm from './todoAddForm';

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

    handleAdd = (name) =>{
        this.props.onAdd(name);
    }

    handleAdd = (name) =>{
        this.props.onAdd(name);
    }

    render() {
        return (
            <>
                <TodoAddForm onAdd={this.handleAdd} />
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
                <button onClick={this.props.onReset}>카운트 초기화</button>
            </>
        );
    }

}

export default Todos;