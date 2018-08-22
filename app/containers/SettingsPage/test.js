import React, { Component } from 'react';
export class ChildComponent extends Component {
  render() {
    return (
      <p>{this.props.body}</p>
    );
  }
}