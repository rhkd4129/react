import React, {useState} from "react";

const TodoInputComponent = ({onAddTodo})=>{

    const [todoText , setTodoText] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        if(todoText.trim() === ''){
            alert("입력해주세요")
            return;
        }
        if(todoText.length >10){
            alert("너무길어")
            return;
        }
        const newTodo = {
            id: Date.now(),
            text: todoText.trim(),
            completed: false
        };
        onAddTodo(newTodo);
        setTodoText('');


    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                />
            </form>
        </div>
    )
}
export default TodoInputComponent;
