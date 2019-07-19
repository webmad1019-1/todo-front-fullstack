import React, { Component } from 'react'
import TaskCollection from './TaskCollection';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TaskCollection></TaskCollection>
        {/* <div className="background"></div> */}
      </React.Fragment>
    )
  }
}
