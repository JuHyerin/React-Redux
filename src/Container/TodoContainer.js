import React from 'react';
import Todos from "../components/Todos";
import {useSelector, useDispatch} from "react-redux";
import {toggleTodo, addTodo} from "../modules/todos";

function TodoContainer(){
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onToggle = id => dispatch(toggleTodo(id));
    const onCreate = text => dispatch(addTodo(text));
    return (
        <Todos
            todos={todos}
            onToggle={onToggle}
            onCreate={onCreate}/>
    );
}
export default TodoContainer;