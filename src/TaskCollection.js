import React, { Component } from 'react'
import TaskList from './TaskList';
import "./TaskCollection.css";

export default class TaskCollection extends Component {
    render() {
        return (
            <section className="task-collection">
                <input type="text" placeholder="Add a new task" className="add-new-task"></input>
                <TaskList></TaskList>
            </section>
        )
    }
}
