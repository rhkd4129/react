import React from "react";
import TodoItemComponent from "./TodoItemCompoent";

const TodoListComponent = ({todoList})=>{
    // const items = Array.isArray(todoList) ? todoList : [todoList];

    return(
        <div>
            {todoList.map((item)=> <TodoItemComponent key ={item.id} todoItem ={item} />)}
        </div>
    )
}
export default TodoListComponent;
