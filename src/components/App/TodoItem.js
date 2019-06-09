import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component{

    render(){

        const {
            id,
            text,
            checked,
            onToggle,
            onRemove
        } = this.props
        return(
            <div className={`todo__item ${checked && 'checked'}`} onClick={()=> onToggle(id)}>
                <div className="remove" onClick={(e)=>{
                    e.stopPropagation()
                    onRemove(id)
                }}
                >&times;</div>
                <div className={`text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>
        )
    }
}

export default TodoItem