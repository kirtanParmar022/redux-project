import {configurestore} from '@reduxjs/too;llkit';
import todoReducer from'../feature/todo/todoslice';

export const store=configurestore({
    reducer:todoReducer
})