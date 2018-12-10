import React, { Component } from 'react';

// import store and addArticle function so we can update the store from here
import store from "../store/store.js";
import { addArticle } from "../store/actions.js";

class Child extends Component {
  state = {
    input: ""
  };

  handleClick = () => {
    // send new article to store to save
    store.dispatch(addArticle(this.state.input));

    // clear state
    this.setState({
      input: ""
    });
  };

  handleChange = (event) => {
    // when input value changes, update state as well
    this.setState({
      input: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        {" "}
        <button onClick={this.handleClick}>Add Article</button>
      </div>
    );
  }
}

export default Child;
