import React, { Component } from 'react'
import "./Task.css"
import checkbox from "./img/checkbox.png"

export default class Task extends Component {
    render() {
        return (
            <li className="task">
                {/* <input type="checkbox" className="done"></input> */}
                <img src={checkbox} className="done"></img>
                <svg className="favourite" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
                <div>
                    <h3 className="name">my task to be done</h3>
                    <span className="timestamp">timestamp</span>
                </div>
            </li>
        )
    }
}
