import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import { todoSelector } from "../../redux/reducers/todoReducer";
import styles from "./ToDoList.module.css";
import { useEffect } from "react";
import axios from "axios";

function ToDoList() {

  const todos=useSelector(todoSelector);
  console.log(todos);
  const disptach = useDispatch();
  // const todos= store.getState().todos;

  useEffect(async()=>{
    // fetch("http://localhost:4100/api/todos/")
    // .then(res=>res.json())
    //  .then(parsedJson=>{
    //   console.log(parsedJson);
    //  })
    // axios.get("http://localhost:4100/api/todos/")
    // .then(res=> res.json())
    // .then(parsedResponse=>{
    //   console.log(parsedResponse)
    // })
    const {data} = await axios.get("http://localhost:4100/api/todos/");
    console.log("data", data);
    disptach(actions.setInitialState(data));
  },[])

  return (
    <div className={styles.container}>
    <ul>
      {todos.map((todo,index) => (
        <li className={styles.item} key={todo.id}>
          <span className={styles.content}>{todo.text}</span>
          <span className={todo.completed ? styles.completed:styles.pending}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{
            // console.log("[LOG]: TODO - TOGGLE Action dispatched")
            disptach(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;