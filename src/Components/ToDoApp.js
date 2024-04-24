
import React, { Component } from 'react';
import ToDoList from './ToDoList';
import ToDo from './ToDo';
import uuidv4 from 'uuid';


export default class ToDoApp extends Component {
    state = {
        tasks: [
            { id: 1, name: "taask1", done: false },
            { id: 2, name: "taask2", done: false }
        ]
    };

    addToDo = (newTask) => {
        if (newTask === "") {
            alert("Sie müssen etwas schreiben");
        }
        else if (this.state.tasks.find(tasks => tasks.name === newTask)) {
            {
                alert("Sie haben das schon geschreiben!!");
            }
        }
        else {
            const neuTask = {
                id: 1,
                name: newTask,
                done: false
            };
            this.setState(
            {
                tasks: [...this.state.tasks, neuTask]
            })
        }
   
    }
    removeTodo=(e)=>{
      
        const filtered = this.state.tasks.filter(tasks => tasks.name !== e)

        this.setState({
            tasks:filtered
        })
    }

    strichtElement=(e)=>
    {
        const strichtElement = this.state.tasks.map(tasks => {
            
            if(tasks.name === e){
                tasks.done =! tasks.done
            }
           
            return tasks 
            })

        this.setState({
                tasks:strichtElement,
            })
    }

    render() {
        return (

            <div>
                <ToDo addToDo={this.addToDo} />
                <ToDoList
                removeTodo={this.removeTodo}
                tasks={this.state.tasks} />
            </div>
        );
    }
}
