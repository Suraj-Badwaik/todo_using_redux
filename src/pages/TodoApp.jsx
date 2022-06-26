import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodosFailure,
  addTodosLoading,
  addTodosSuccess,
  deleteTodosFailure,
  deleteTodosLoading,
  deleteTodosSuccess,
  getTodosFailure,
  getTodosLoading,
  getTodosSuccess,
  // todoRemove,
} from "../Todo/todo.action";
import "../../src/pages/Todo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const TodoApp = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);

  const addNewTodo = (payload) => {
    dispatch(addTodosLoading());
    axios
      .post("http://localhost:3030/todos", payload)
      .then((r) => dispatch(addTodosSuccess(r.data)))
      .catch((e) => dispatch(addTodosFailure()));
  };

  const addNew = () => {
    let value = ref.current.value;

    addNewTodo({
      value: value,
      isCompleted: false,
    });

    ref.current.value = null;
  };

  const getTodos = () => {
    dispatch(getTodosLoading());
    axios
      .get("http://localhost:3030/todos")
      .then((r) => dispatch(getTodosSuccess(r.data)))
      .catch((e) => dispatch(getTodosFailure(e)));
  };

  const removeTodo = (id) => {
    dispatch(deleteTodosLoading());
    axios
      .delete(`http://localhost:3030/todos/${id}`)
      .then((r) => {
        dispatch(deleteTodosSuccess(id));
        navigate("/");
      })
      .catch((e) => dispatch(deleteTodosFailure(e)));
  };

  useEffect(() => {
    if (todos?.length === 0) {
      getTodos();
    }
  }, []);

  // let list = JSON.parse(localStorage.getItem('List')) || [];

  return (
    <div className="wrapper">
      <header>TodoApp</header>
      <div className="inputField">
        <input ref={ref} type="text" placeholder="Add something here..." />
        <button onClick={addNew}>
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <div>
        {todos.map((d) => (
          <ul key={d.id} className="todoList">
            <Link to={`/todos/${d.id}`}>
              <li>
                <input type="checkbox" />
                <div>{d.value}</div>
                <div className="icon">
                  <button className="icon2">
                    <EditRoundedIcon />
                  </button>

                  <button
                    className="icon2"
                     onClick={() => removeTodo(d.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </li>
            </Link>
          </ul>
        ))}
      </div>

      <div className="footer">
        <span>
          You have <span className="pendingTasks">{todos.length}</span> pending
          tasks
        </span>
        <button>Clear All</button>
      </div>
    </div>
  );
};

export default TodoApp;
