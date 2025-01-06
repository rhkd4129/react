
import './css/App.css';
import TodoBoardContainer from "./component/todoList/TodoBoardContainer";
import Counter from "./component/Counter";
import {useEffect} from "react";
// import {useDispatch} from "react-redux";
// import { addCounter } from "../src/store/counterSlice";

function App() {
  // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(addCounter({ startNumber: 1, bgColor: 'red' }));
    // }, [dispatch]);
    // dispatch가 변경될 때마다 useEffect가 다시 실행됨
    // 실제로는 dispatch는 거의 변경되지 않음 (Redux store가 생성될 때 한 번 만들어짐)
  return (
      <div className="App">

        <div style={{display: "flex", gap: "30px"}}>
          <Counter id={0} bgColor={"red"} startNumber={0}/>
        </div>
        <div>
          <TodoBoardContainer></TodoBoardContainer>
        </div>


      </div>
  );
}

export default App;
