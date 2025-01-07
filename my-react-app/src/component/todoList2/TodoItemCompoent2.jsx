import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {completedTodo, removeTodo} from "../../store/todoListSlice";

const TodoItemComponent2 = ({todo})=>{
    // const todo = useSelector(state => state.todoList.todoList.find(todo=>todo.id === id))
    const dispatch = useDispatch();
    console.log("todo컴포넌트 새로고침")
    const styles = {
        color:todo.completed?"red":"black",
        textDecoration:todo.completed ? "line-through":"none" // 밑줄 추가
    }

    // const handlerCheckBox = (e,id)=> {
    //     dispatch(completedTodo({id:id, isCompleted :e.target.checked}))
    // }
    // const handlerRemoveBtn = (e,id) =>{
    //     dispatch(removeTodo({id:id}))
    // }
    // useCallback을 사용하여 함수를 메모이제이션
    const handlerCheckBox = useCallback((e) => {
        dispatch(completedTodo({id: todo.id, isCompleted: e.target.checked}))
    }, [todo.id, dispatch]);  // 의존성 배열

    const handlerRemoveBtn = useCallback(() => {
        dispatch(removeTodo({id: todo.id}))
    }, [todo.id, dispatch]);  // 의존성 배열



    return(
        <div className={"todoItem"} >
            <span className={"todoItemContent"} style={styles}>{todo.text}

                {/* 메모이제이션된 함수를 직접 전달 */}
                <input type="checkbox" onChange={handlerCheckBox}/>
                <span className={"todoItemRemoveBtn"}>
                    <input type="button"   value="삭제" onClick={handlerRemoveBtn}/>
                </span>

                {/*<input type="checkbox" onChange={(e) => handlerCheckBox(e, todo.id)}/>*/}
                {/*<span className={"todoItemRemoveBtn"}><input type="button" value="삭제" onClick={(e) => handlerRemoveBtn(e, todo.id)}/></span>*/}
            </span>
        </div>
    )
}

export default React.memo(TodoItemComponent2);
// style={{color:todoItem.completed ? "red":"black"}}
