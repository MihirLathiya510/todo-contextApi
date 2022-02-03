import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Context from "./TodoContext";
import todoReducer from "./reducer";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <Context.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1> Todo-app with ContextApi </h1>

        <Todos />
        <TodoForm />
      </Container>
    </Context.Provider>
  );
}

export default App;
