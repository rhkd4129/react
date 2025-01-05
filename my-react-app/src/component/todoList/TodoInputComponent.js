import React, {useState} from "react";

const TodoInputComponent = ({onAddTodo})=>{

    const [todoText , setTodoText] = useState("")


    const onChange = (e)=>{
        setTodoText(e.target.value);
    }

    const todoInputEnter  = (e)=>{
        if(e.key ==='Enter' && todoText.trim() !== ''){
            const newTodo = {
                id:Date.now(),
                text:todoText
            }
            onAddTodo(newTodo);
            setTodoText('')
        }
    }

    return(
        <div>
            <input type="text" value = {todoText} onChange={onChange} onKeyPress={todoInputEnter}/>
        </div>
    )
}
export default TodoInputComponent;
