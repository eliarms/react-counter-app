import React, { Component } from "react";

class Counter extends Component {
  renderTags() {
    if (this.props.counter.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.props.counter.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    console.log("props", this.props);
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/*
        <button
          className="btn btn-primary btn-sm"
          onClick={this.handleDecrement}
        >
          -
        </button>
         {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
