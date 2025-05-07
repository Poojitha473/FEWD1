import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    // Initialization
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component is initialized");
  }

  // Mounting
  componentDidMount() {
    console.log("componentDidMount: Component has been mounted");
  }

  // Updating
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("componentDidUpdate: Count has been updated");
    }
  }

  // Unmounting
  componentWillUnmount() {
    console.log("componentWillUnmount: Component is about to be removed");
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>React Lifecycle Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement} style={{ marginLeft: "10px" }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
