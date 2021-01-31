import React, {useState} from 'react';

const TodoHooks = (props) => {

    const [count, setCount] = useState(0);


    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    return (
        <li className="todo">
            <span className="todo-name">React</span>
            <span className="todo-count">{count}</span>
            <button className="todo-button todo-increase"  onClick={increaseCount}>
                <i className="fas fa-plus"></i>
            </button>
            <button className="todo-button todo-decrease" onClick={decreaseCount}>
                <i className="fas fa-minus"></i>
            </button>
            <button className="todo-button todo-delete">
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );

}


export default TodoHooks;

