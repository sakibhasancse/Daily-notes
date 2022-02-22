import React, {useState, useEffect} from 'react';
import AddTodo from './components/AddTodo'
import { getTodos, addTodo, updateTodo, deleteTodo } from './helpers/api'

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
   useEffect(() => {
    fetchTodos()
   }, [])
  
  
  const fetchTodos = (): void => {
    getTodos()
    .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
    .catch((err: Error) => console.log(err))
  }

}

export default App;
