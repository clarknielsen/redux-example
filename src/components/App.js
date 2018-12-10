import React, { Component } from 'react';
import Child from "./Child";

// import our redux store
import store from "../store/store.js";

class App extends Component {
  // initial state comes from the store
  state = store.getState();

  componentDidMount() {
    // set up listener to capture store changes
    store.subscribe(() => {
      // and then update state
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <div>
        <h1>Article List</h1>

        <Child />

        <ul> 
        {
          // convert each article into an li tag
          this.state.articles.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          })
        } 
        </ul>
      </div>
    );
  }
}

export default App;
