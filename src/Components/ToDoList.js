import React, { Component } from 'react'
import ToDoApp from './ToDoApp'

export default class 
 extends Component {
  
  render() {
    return (
    <ul>
        {this.props.tasks.map(tasks=>{
            return(
                <div key={tasks.id}>
                    <li
                    className={ tasks.done ?  "done" : ""}
                    onClick={()=>this.props.strichtElement(tasks.name)}>{tasks.name}</li>
                    <button onClick={()=>this.props.removeTodo(tasks.name)}>Delete</button>
                </div>
            )
        })}
    </ul>
    )
  }
}
