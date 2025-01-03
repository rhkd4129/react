import React, {useState} from 'react';


const TodoListComponent  = ()=>{
    const [todoList, setTodoList] = useState([
        { id: 1, text: 'todo' },
        { id: 2, text: 'hi' }
    ]);
    const [text , setText]= useState("")

    const onChange = (e)=>{
        setText(e.target.value);
    }
    const todoSubmit = (e)=>{
        if(e.key ==='Enter' && text.trim() !== ''){
            const newTodo = {
                id:Date.now(),
                text:text
            }
            setTodoList([...todoList , newTodo])
            setText('')
        }
    }

    const removeTodo = (removeTodo)=>{
        setTodoList(todoList.filter(todo=>todo !== removeTodo))
    }

    return(
      <div>
            <input type="text" value={text} onChange={onChange} onKeyPress={todoSubmit}/>
            {todoList.map((todo, index) => (
                <div key={todo.id}>{todo.text}
                    <button onClick={() => removeTodo(todo)}>삭제</button>
                </div>  // todo가 문자열인 경우
            ))}
      </div>
    );
}

export  default TodoListComponent
