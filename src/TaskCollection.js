import React, { Component } from 'react'
import TaskList from './TaskList';
import "./TaskCollection.css";
import TaskElement from "./TaskElement"

export default class TaskCollection extends Component {
    constructor() {
        super();

        this.state = {
            newTaskString: "",
            tasks: [
                new TaskElement("pan")
            ]
        }
    }

    toggle(taskID, property) {
        let chosenTask = this.state.tasks.filter(task => task._id === taskID)[0]

        chosenTask[property] = !chosenTask[property]

        this.setState({
            ...this.state
        })
    }

    updateNewTaskString(e) {
        this.setState({
            ...this.state,
            newTaskString: e.target.value
        })
    }

    addNewTask(e) {
        if (e.key === 'Enter') {
            let tasksClonedArray = [...this.state.tasks]
            tasksClonedArray.unshift(new TaskElement(this.state.newTaskString))

            this.setState({
                ...this.state,
                tasks: tasksClonedArray,
                newTaskString: ""
            })
        }
    }

    render() {
        return (
            <section className="task-collection">
                <input type="text"
                    placeholder="Add a new task"
                    className="add-new-task"
                    value={this.state.newTaskString}
                    onChange={(e) => this.updateNewTaskString(e)}
                    onKeyDown={(e) => this.addNewTask(e)} />
                <TaskList tasks={this.state.tasks}
                    toggleDone={(task) => this.toggle(task, "done")}
                    toggleFavourite={(task) => this.toggle(task, "favourited")}
                >
                </TaskList>
            </section>
        )
    }
}
