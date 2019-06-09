import React, { Component } from 'react'
import Header from './Header'
import TodoTemplate from './TodoTemplate'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import "./App.css"

class App extends Component{
    constructor(){
        super()
        
        this.state = {
            input:'',
            id:3,
            todos:[
                {id:0, text: 'Write a blog post', checked: false},
                {id:1, text: 'Study English', checked: false},
                {id:2, text: 'Play Apex Legends', checked: true},
            ]
            
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        

    }

   

    handleChange(e){
        this.setState({
            input: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const { 
            input,
            todos,
            id
        } = this.state

        this.setState({
            input: '',
            todos:todos.concat({
                id:this.state.id++,
                text: input,
                checked: false
            })
        })
    }
    handleToggle(id){
        const { todos } = this.state

        const index = todos.findIndex(todo => todo.id === id)
        const selected = todos[index]

        const nextTodos = [...todos]

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        }

        this.setState({
            todos: nextTodos
        })

    }
    handleRemove(id){
        const { todos } = this.state

        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        })
    }
    render(){
        const { input, todos } = this.state
        const {
            handleChange,
            handleSubmit,
            handleToggle,
            handleRemove
        } = this
        return(
            <TodoTemplate>
                <Header />
                <TodoForm          
                    value={input}       
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <TodoList 
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </TodoTemplate>
            
        )
    }
}

export default App