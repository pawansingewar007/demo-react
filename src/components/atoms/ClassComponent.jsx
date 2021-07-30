import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "pawan",
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("derived state from props", nextProps, prevState);
    return {
      name: nextProps.name || prevState.name,
    };
  }
  componentDidMount() {
    console.log("component did mount");
  }
  shouldComponentUpdate() {
    console.log("shoud component update");
    return true;
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  render() {
    console.log("render function");
    return (
      <>
        This is a class component.
        {this.state.name}
        <button onClick={() => this.setState({ name: "Rudra" })}>
          Change state
        </button>
      </>
    );
  }
}

export default ClassComponent;
