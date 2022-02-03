import { ADD_TODO, REMOVE_TODO } from "./action.types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case REMOVE_TODO:
            return state.filter(todo=> todo.id !== action.payload)
        default:
            return state;
    }
}