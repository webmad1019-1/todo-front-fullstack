import React, { Component } from 'react'
import Task from './Task';
import "./TaskList.css"

export default class TaskList extends Component {
    render() {
        return (
            <ol className="task-list">
                <Task></Task>
                <Task></Task>
                <Task></Task>
                <Task></Task>
                <Task></Task>
                <Task></Task>
                <Task></Task>
            </ol>
        )
    }
}
