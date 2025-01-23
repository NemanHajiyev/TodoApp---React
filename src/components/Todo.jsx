import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
// <FaCheckCircle />


function Todo({ todo, onRemoveTodo, editTodo }) {
    const { id, content } = todo;
    const [edit, setEdit] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id)
    }

    const editTodos = () => {
        const request = {
            id: id,
            content: newTodo
        }
        editTodo(request)
        setEdit(false)
    }




    return (
        <div className='todo'>
            <div className='todos'>
                <p>{
                    edit ? <input
                        style={{ width: "100%" }}
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        type="text"
                        id='input' /> : content
                }</p>
                <div style={{ width: "60px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                    <IoIosRemoveCircle
                        onClick={removeTodo}
                        className='icon' />

                    {

                        edit ? <FaCheckCircle
                            onClick={editTodos}
                            className='icon' /> : <FaEdit
                            onClick={() => setEdit(true)}
                            className='icon' />
                    }


                </div>
            </div>
        </div>
    )
}

export default Todo