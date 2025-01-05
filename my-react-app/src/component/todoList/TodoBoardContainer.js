import React, {useState} from "react";
import TodoInputComponent from "./TodoInputComponent";
import TodoList from "../TodoList";
import TodoListComponent from "./TodoListComponent";

const TodoBoardContainer = ()=>{


    const [todoList , setTodoList] = useState([]);

    const handleAddTodo = (newTodo)=>{
        console.log(newTodo)
        setTodoList([...todoList,newTodo])
    }

    return(
        <div>
            <TodoInputComponent onAddTodo={handleAddTodo}></TodoInputComponent>
            <TodoListComponent todoList={todoList} ></TodoListComponent>
        </div>
    )
}
export default TodoBoardContainer;
