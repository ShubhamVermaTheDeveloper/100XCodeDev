import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function App() {
  const [todoId, setTodoId] = useState(1);
  return (
    <div>
      <button onClick={() => { setTodoId(1) }}>1</button>
      <button onClick={() => { setTodoId(2) }}>2</button>
      <button onClick={() => { setTodoId(3) }}>3</button>
      <button onClick={() => { setTodoId(4) }}>4</button>
      <button onClick={() => { setTodoId(5) }}>5</button>
      id is : {todoId}
      <Todo id={todoId} />
    </div>
  );
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    setTimeout(()=>{
      axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
     .then(response => {
      setTodo(response.data.todo)
     })
    }, 1000)
  }, [id])

  return <div>
    <h1>{todo.id}</h1>
    <h1>
    {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;
