import React, { Component } from 'react'
import TaskList from './TaskList';
import "./TaskCollection.css";
import TaskElement from "./TaskElement"

export default class TaskCollection extends Component {
    constructor() {
        super();

        this.taskItems = [
            new TaskElement("comprar el pan comprar el pan comprar el pan comprar el pan comprar el pan comprar el pan comprar el pan comprar el pan comprar el pan "),
            new TaskElement("ir a la peluquería"),
            new TaskElement("relax en el spa"),
        ]

        this.state = {
            tasks: this.taskItems
        }
    }

    toggleDone(taskID) {
        let chosenTask = this.state.tasks.filter(task => task._id === taskID)[0]

        chosenTask.done = !chosenTask.done
        
        this.setState({
            ...this.state,
            tasks: this.taskItems
        })
    }

    toggleFavourite(taskID) {
        let chosenTask = this.state.tasks.filter(task => task._id === taskID)[0]

        chosenTask.favourited = !chosenTask.favourited
        
        this.setState({
            ...this.state,
            tasks: this.taskItems
        })
    }

    render() {
        return (
            <section className="task-collection">
                <input type="text" placeholder="Add a new task" className="add-new-task"></input>
                <TaskList tasks={this.state.tasks} 
                    toggleDone={(task) => this.toggleDone(task)}
                    toggleFavourite={(task) => this.toggleFavourite(task)}
                    >
                    </TaskList>
            </section>
        )
    }
}
