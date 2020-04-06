import React from 'react';
import TodoList from "./components/TodoList.js";
import TodoForm from "./components/TodoForm.js";
import "./components/Todo.css";
import "babel-polyfill";
import SimpleStorage from "react-simple-storage";

const tasks = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks
    }
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);
    // map over array
    // when we find the item we clicked, toggle the purchased field
    // otherwise return the item untouched
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    // if item is purchased (item.purchased is true) then filter out
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <SimpleStorage parent={this} />
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
