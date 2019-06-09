import React, { Component } from 'react'

import './TodoForm.css'

class TodoForm extends Component{

    constructor(){
        super()

        this.state = {
            value:''
        }
    }

    render(){
        const {
            value,
            onChange,
            onSubmit
        } = this.props
        return(
            <form id="todolist__form" className="todolist__form" onSubmit={onSubmit}>
                <div className="wrap__input">
                    <input 
                        type="text" 
                        name="todo_text" 
                        className="input__text"
                        placeholder="ex) read every morning"
                        value={value}
                        onChange={onChange}
                    />
                    
                </div>
            </form>
        )
    }
}

export default TodoForm