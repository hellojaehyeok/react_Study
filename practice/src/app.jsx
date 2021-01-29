import React, { Component }  from 'react';
import './app.css';
import Todos from './components/todos';
import Nav from './components/nav';

class App extends Component {

  state = {
    todos:[
        { id : 1, name : "React", count : 0},
        { id : 2, name : "Three.js", count : 0},
        { id : 3, name : "jQuery", count : 0},
    ],count : 0
  };

  handleIncrement = (todo) =>{
      const todos = [...this.state.todos];
      const index = todos.indexOf(todo);
      todos[index].count++;
      const navCount = this.state.count+1;
      this.setState({todos, count : navCount});
  };

  handleDecrement = (todo) =>{
      const todos = [...this.state.todos];
      const index = todos.indexOf(todo);
      const count = todos[index].count - 1;
      todos[index].count = count < 0 ? 0 : count;
      let navCount = this.state.count;
      if(count >= 0){
        navCount -= 1;
      }
      this.setState({todos, count : navCount});
  };

  handleDelete = (todo) =>{
    let todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    const todoCount = todos[index].count;
    let navCount = this.state.count;
    navCount -= todoCount;
    
    todos = this.state.todos.filter(item =>item.id !== todo.id)
    this.setState({todos, count : navCount});
  };

  handleAdd = (name) =>{
    const newTodo = {
      id : Date.now,
      name : name,
      count : 0
    }
    const todos = [...this.state.todos, newTodo];
    this.setState({todos})
  }

  handleReset = () =>{
    const todos = this.state.todos.map(todo =>{
      todo.count = 0;
      return todo;
    });
    this.setState({todos, count : 0});
  }

  render() {
    return (
      <>
        <Nav 
          totalCount={this.state.count}
        />
        <Todos 
          todos={this.state.todos}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  };
}

export default App;
