import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import Context from "../TodoContext";
import { REMOVE_TODO } from '../action.types';

const Todos = () => {
    const { todos, dispatch } = useContext(Context)
    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}> 
                    {todo.todoString}
                    <span className="float-end"
                        onClick={() => {
                            dispatch({
                                type: REMOVE_TODO,
                                payload: todo.id
                        })
                    }}
                    ><FaCheckDouble /></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
};

export default Todos;