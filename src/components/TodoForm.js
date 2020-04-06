import React from 'react';
import "babel-polyfill";
import SimpleStorage from "react-simple-storage";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitItem = e => {
    e.preventDefault();
    this.setState({ item: '' });
    this.props.addItem(e, this.state.item);
  };

  render() {
    console.log('rendering form');
    return (
        <div>
            <SimpleStorage parent={this} />
            <form onSubmit={this.submitItem}>
                <input
                type="text"
                value={this.state.item}
                name="item"
                onChange={this.handleChanges}
                />
            <button>Add</button>
            </form>
        </div>
    );
  }
}

export default TodoForm;