import React, { Component } from 'react'

import './TodoTemplate.css'

class TodoTemplate extends Component{

    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        const { children } = this.props
        return(
            <div className="todo__wrapper">
                {children}
            </div>
        )
    }
}

export default TodoTemplate