import React from "react";

const TodoItemComponent = ({todoItem})=>{
    return(
        <div>
            {todoItem.text}
        </div>
    )
}
export default TodoItemComponent;

//
// const TodoItemComponent = (props)=>{
//     return(
//         <div>
//             {props.todoItem.text}
//         </div>
//     )
// }
// props로 받고 필요한 것 꺼내 쓰기:
// 처음부터 구조분해할당으로 꺼내기:
