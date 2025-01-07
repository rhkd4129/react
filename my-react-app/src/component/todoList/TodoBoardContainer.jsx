import React, {useState} from "react";
import TodoInputComponent from "./TodoInputComponent";
import TodoListComponent from "./TodoListComponent";
import '../../css/todoList/todoList.css'

const TodoBoardContainer = ()=>{
    const [todoList , setTodoList] = useState([]);
    const handleAddTodo = (newTodo)=>{
        setTodoList([...todoList,newTodo])
    }
    const onCheckChange=(id,isChecked)=>{
        setTodoList(todoList.map(todo=>todo.id === id ? {...todo, completed:isChecked} : todo))
    }
    const handlerRemoveBtn = (id)=>{
        setTodoList(todoList.filter(todo=>todo.id !== id ))
        //id가 같은것만 새로운 배열에 포함시킴 == 삭제
    }

    return(
        <div className={"todoBoard"}>
            <TodoInputComponent onAddTodo={handleAddTodo}></TodoInputComponent>
            <TodoListComponent todoList={todoList} onCheckChange = {onCheckChange} handlerRemoveBtn={handlerRemoveBtn}></TodoListComponent>
        </div>
    )
}
export default TodoBoardContainer;


