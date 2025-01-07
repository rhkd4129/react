import React, {useState} from "react";
import {useSelector} from "react-redux";
import TodoItemComponent2 from "./TodoItemCompoent2";

const TodoListComponent2 = ()=>{
    const todoList = useSelector(state => state.todoList.todoList)
    if(!todoList)return null;
    console.log("todoList 새로고침")
    return(
        <div>
            {todoList.map((todo)=><TodoItemComponent2 key ={todo.id} todo={todo}/>)}
            {/*여기서id를 주는게 아닌 todo를 직접 줌*/}
        </div>
    )
}
export default TodoListComponent2;
