import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, text: "hello world" }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { // Fixed 'reducer' to 'reducers'
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload); // Fixed the access to 'todo.id'
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
