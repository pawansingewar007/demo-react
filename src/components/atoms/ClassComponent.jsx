import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor call");
    this.state = {
      name: "pawan",
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("derived state from props call", nextProps, prevState);
    return {
      name: nextProps.name || prevState.name,
    };
  }
  componentDidMount() {
    console.log("component did mount call");
  }
  shouldComponentUpdate() {
    console.log("shoud component update call");
    return true;
  }
  componentWillUnmount() {
    console.log("component will unmount call");
  }
  componentDidUpdate() {
    console.log("component did update call");
  }
  render() {
    console.log("render function call");
    return (
      <>
        This is a class component details.
        <br />
        {this.state.name}
        <br />
        <button onClick={() => this.setState({ name: "Rudra" })}>
          Change state
        </button>
      </>
    );
  }
}

export default ClassComponent;
