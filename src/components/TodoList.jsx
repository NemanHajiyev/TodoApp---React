import React from 'react'
import Todo from '../components/Todo'

function TodoList({ todos, onRemoveTodo, editTodo }) {
    return (
        <div className='todo-list'>
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} editTodo={editTodo} />
                ))
            }
        </div>
    )
}

export default TodoList