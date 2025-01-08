import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
    name:'todoList',
    initialState:{
        todoList: [

        ]
    },
    reducers:{
        addTodo:(state,action)=>{
            const todo = action.payload.todo
            state.todoList=[...state.todoList,todo]
            // const {id,text,completed } = action.payload;
            // const todo ={
            //     id,
            //     text,
            //     completed
            // }
            // state.todoList.push(todo);

        },
        completedTodo:(state,action)=>{
            const {id, isCompleted} = action.payload
            const todo = state.todoList.find(todo=>todo.id ===id)
            if (todo) {
                todo.completed = isCompleted
            }

            // state.todoList.map((todo, index)=>{
            //     if(index === 1){
            //         return{
            //             ...todo,
            //             completed:newValue,
            //         };
            //     }
            // })

           /* state.todoList.map(todo=> todo.id === id
                ? {...todo,completed:isCompleted}
                :todo //????
            );*/





        },
        removeTodo:(state,action)=>{
            const id = action.payload.id
            state.todoList=  state.todoList.filter(todo=>todo.id !==id)
            // return {
            //     ...state,
            //     todoList: state.todoList.filter(todo => todo.id !== id)
            // }
        }
    }

})


export const {addTodo,completedTodo,removeTodo} = todoListSlice.actions
export default todoListSlice.reducer
