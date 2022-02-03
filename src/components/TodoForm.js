import React, { useState, useContext } from "react";

import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";

import Context from "../TodoContext";
import { ADD_TODO } from "../action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(Context);
  const handleSubmit = (e) => {
    e.preventDefault();
    //   console.log(todoString);
    if (todoString === "") {
      return alert("please enter a todo");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    //   console.log(todo);
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    console.log(dispatch);
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your Next Todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <inputGroupAddon>
            <Button color="warning">Add</Button>
          </inputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
