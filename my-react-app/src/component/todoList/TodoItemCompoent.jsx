import React  from 'react';

const TodoItemComponent = ({todoItem,onCheckChange,handlerRemoveBtn})=>{

    const styles = {
        color:todoItem.completed?"red":"black",
        textDecoration:todoItem.completed ? "line-through":"none" // 밑줄 추가
    }

    const handlerCheckBox = (e)=> {
        onCheckChange(todoItem.id, e.target.checked)
    }
    // }
    // const handlerRemoveBtn = (e) =>{
    //     handlerRemoveBtn(todoItem.id)
    // }


    return(
        <div className={"todoItem"} >
            <span className={"todoItemContent"} style={styles}> {todoItem.text} <input type="checkbox" onChange={handlerCheckBox}/> </span>
            <span className={"todoItemRemoveBtn"}><input type="button" value="삭제" onClick={(e) => handlerRemoveBtn(todoItem.id)}/></span>


        </div>

    )
}
export default TodoItemComponent;
// style={{color:todoItem.completed ? "red":"black"}}
