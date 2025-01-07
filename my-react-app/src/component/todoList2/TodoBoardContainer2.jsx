import React, {useState} from "react";
import TodoInputComponent2 from "./TodoInputComponent2";
import TodoListComponent2 from "./TodoListComponent2";
import '../../css/todoList/todoList.css'

const TodoBoardContainer2 = ()=>{


    return(
        <div className={"todoBoard"}>
            <TodoInputComponent2></TodoInputComponent2>
            <TodoListComponent2></TodoListComponent2>
        </div>
    )
}
export default TodoBoardContainer2;


