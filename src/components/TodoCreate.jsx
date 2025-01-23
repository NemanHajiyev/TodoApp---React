import React from 'react'
import { useState } from 'react'

function TodoCreate({ ToCreateTodo }) {
    const [newTodo, setNewTodo] = useState("")

    const addTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo
        }
        ToCreateTodo(request)
        setNewTodo('')
    }


    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                type="text" id='input' />
            <button
                onClick={addTodo}
                className='addBtn'>Add</button>
        </div>
    )
}

export default TodoCreate