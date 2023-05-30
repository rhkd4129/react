import React from "react";
import { useState } from 'react';

// class TodoItem extends React.Component{

//     render(){
//         const {todo} = this.props
//         return(
//             <div><li>{todo}</li></div>
//         );
//     }
// }


// class TodoListPra extends React.Component{
//     state={
//         todoList:['파이썬','장고'],
//         current:'',
//     }
//     onChange = (e)=>{
//         const {value} = e.target
//         this.setState({current:value})
//     }
//     onKeyDown=(e)=>{
//         if(e.keyCode ==13){
//             const {todoList, current} = this.state
//             this.setState({
//                 current:'',
//                 todoList:[...todoList,current]
//             })
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <ul>
//                     {this.state.todoList.map((todo,index) =><TodoItem  key ={index} todo={todo} /> )}
                   
//                 </ul>

//                 <input onChange={this.onChange}
//                 onKeyDown={this.onKeyDown}
//                 value = {this.state.current}
//                 ></input>
            
//             </div>
//         );
//     }
      


// }

const TodoItem = ({todo})=> <li>{todo}</li>

function TodoListPra({todo}){
    const [TodoItems,setTodoItem] = useState(
        {todoList:['장고','파이썬'],
         current:''
    });


    const onchange = (e)=>{
        const value = e.target.value
        setTodoItem((prevState)=>({...prevState,current:value}))
    }
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
          setTodoItem((prevState) => ({
    
            todoList: [...prevState.todoList, prevState.current],
            current: ''
          }));
        }
      };
    return(
        <div>
            <ul>
                {TodoItems.todoList.map((todo,index)=>(<TodoItem key={index} todo={todo}></TodoItem>))}
            </ul>
            <input onChange={onchange}
            onKeyDown={onKeyDown}
            value={TodoItems.current}></input>
            <p>{TodoItems.current}</p>
        </div>
    );
}

export default TodoListPra;