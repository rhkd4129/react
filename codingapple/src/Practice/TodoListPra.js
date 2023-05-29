import React from "react";
// import { useState } from 'react';


class TodoListPra extends React.Component{

    state={
        todoList:['파이썬','장고'],
    }

    render(){
        return(
            <div>
                <ul>
                    <li>{this.state.todoList[0]}</li>
                    <li>{this.state.todoList[1]}</li>
                </ul>

                <input></input>
            </div>
        );
    }
      


}


export default TodoListPra;