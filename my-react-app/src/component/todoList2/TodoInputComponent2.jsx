import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {  addTodo } from "../../store/todoListSlice";
const TodoInputComponent2 = ()=>{
    const [todoInputText, setTodoInputText] = useState('')
    const todoList = useSelector(state => state.todoList.todoList)
    const dispatch = useDispatch()
     if (!todoList) return  null;


    const handlerFormSubmit = (e)=>{
        e.preventDefault();
        const todo = {
            id: new Date().getTime(),
            text:todoInputText,
            completed:false
        }
        dispatch(addTodo({todo:todo}))
        setTodoInputText('')
    }

    const todoInputChange = (e)=>{
        setTodoInputText(e.target.value)

    }
    return(
        <div>
            <form onSubmit={handlerFormSubmit}>
                <input type="text" value={todoInputText} onChange={todoInputChange}/>
            </form>
        </div>
    )
}
export default TodoInputComponent2;
