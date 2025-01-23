import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const editTodo = (yeniTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === yeniTodo.id ? { ...todo, content: yeniTodo.content } : todo
      )
    );
  };




  return (
    <div className='general-div'>
      <TodoCreate ToCreateTodo={createTodo} />
      <TodoList todos={todos} onRemoveTodo={deleteTodo} editTodo={editTodo} />
    </div>
  )
}

export default App
