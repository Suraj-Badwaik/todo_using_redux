import { Routes, Route } from "react-router-dom";
import style from "./todo.module.css";
import TodoApp from "./pages/TodoApp";
import Navbar from "./components/Navbar";
import RequiredAuth from "./HOC/RequiredAuth";
import Login from "./pages/Login";
import EachTodo from "./pages/EachTodo";

function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <TodoApp />
            </RequiredAuth>
          }
        />
        <Route path="/todos/:id" element={<EachTodo/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
