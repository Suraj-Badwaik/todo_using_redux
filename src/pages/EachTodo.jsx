import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import "./Todo.css";
import { deleteTodosFailure, deleteTodosLoading, deleteTodosSuccess } from "../Todo/todo.action";
// import {
//   toggleTodosFailure,
//   toggleTodosLoading,
//   toggleTodosSuccess,
// } from "../Todo/todo.action";
import axios from "axios";

const EachTodo = () => {
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todo.todos);
  //  console.log("todos", todos)
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currTodo, setCurrentTodo] = useState({});
  

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
    let currentTodo = todos.find((item) => item.id === Number(id));
    currentTodo && setCurrentTodo(currentTodo);
  }, [todos, id]);
  
  
    // const toggleStatus = (id, newStatus) => {
    //   dispatch(toggleTodosLoading());
    //   axios
    //     .patch(`http://localhost:3030/todos/${id}`, { isCompleted: newStatus })
    //     .then((r) => dispatch(toggleTodosSuccess(r.data)))
    //     .catch((e) => dispatch(toggleTodosFailure(e)));
    // };

  return (
    <div className="todoList">
      <li>
        <input type="checkbox" />
        <div>
          {currTodo?.value}
        </div>
        <div className="icon">
          <button className="icon2">
            <EditRoundedIcon />
          </button>

          <button
            className="icon2"
            onClick={() => removeTodo(currTodo.id)}
          >
            <DeleteIcon />
          </button>
        </div>
      </li>
      <div className="markComplete">
        <button
          // onClick={toggleStatus(currTodo.id, !currTodo.isCompleted)}
        >
          {currTodo?.isCompleted ? "Mark as Pending" : "Mark as Completed"}
        </button>
      </div>
    </div>
  );
};

export default EachTodo;
