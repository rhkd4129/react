
import './css/App.css';
import TodoBoardContainer from "./component/todoList/TodoBoardContainer";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addCounter } from "../src/store/counterSlice";
import Counter from "./component/Counter";
import TodoBoardContainer2 from "./component/todoList2/TodoBoardContainer2";

function App() {
  const dispatch = useDispatch();
  const counters = useSelector((state)=>state.counter.counters);
    useEffect(() => {
        dispatch(addCounter({ startNumber: 1, bgColor: 'red' }));
    }, [dispatch]);
    // dispatch가 변경될 때마다 useEffect가 다시 실행됨
    // 실제로는 dispatch는 거의 변경되지 않음 (Redux store가 생성될 때 한 번 만들어짐)
  return (
      <div className="App">
          <div style={{display: "flex", gap: "30px"}}>
              {counters.map(counter => (  // 괄호 추가
                  <Counter
                      key={counter.id}
                      id={counter.id}
                      bgColor={counter.bgColor}
                  />
              ))}
          </div>
          <div>
              <TodoBoardContainer2/>
              {/*<TodoBoardContainer/>*/}
          </div>
      </div>
  );
}

export default App;
