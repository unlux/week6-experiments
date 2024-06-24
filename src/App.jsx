import axios from "axios";
import useAsyncEffect from "use-async-effect";
import { useState } from "react"


function App() {
  const [todos, setTodos] = useState([]);

  useAsyncEffect(async () => {
    await axios.get("http://localhost:3000/getTodos")
      .then((response) => {
        console.log("console.log(response);");
        console.log(response);
        setTodos(response.data)
        console.log("console.log(response.data)")
        console.log(response.data)
        console.log("console.log(todos)")
        console.log(todos)
      })
  }, []);

  return (<div>
    {todos.map(todo => <TodoComponent key={todo.id} title={todo.title} desc={todo.desc} />)}
    <TodoComponent title="hehe" desc="hehehehehehe" />
  </div>)
}

function TodoComponent({ title, desc }) {
  return (<div>
    <div><b>title: {title} </b></div>
    <div><i>description: {desc}</i></div>
  </div>)
}

export default App


