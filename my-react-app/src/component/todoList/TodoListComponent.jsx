import React from "react";
import TodoItemComponent from "./TodoItemCompoent";

const TodoListComponent = ({todoList, onCheckChange,handlerRemoveBtn})=>{
    // const items = Array.isArray(todoList) ? todoList : [todoList];

    return(
        <div>
            {todoList.map((item)=> <TodoItemComponent key ={item.id} todoItem ={item} onCheckChange={onCheckChange} handlerRemoveBtn={handlerRemoveBtn}/>)}
        </div>
    )
}
export default TodoListComponent;
