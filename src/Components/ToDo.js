import React, { Component } from 'react'

export default class ToDo extends Component {

    state={
        input:"",
    }

    changeHandler=(e)=>{
        this.setState({
            inpute:e.target.value
        })
    }

    submitHandler=(e)=>{
      this.props.addToDo(this.state.inpute)
      e.preventDefault()
      this.setState({
        state:""
      })

    }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type='text'
        value={this.state.value}
        onChange={this.changeHandler}/>
        <button type='submit'>Add</button>
      </form>
    )
  }
}
