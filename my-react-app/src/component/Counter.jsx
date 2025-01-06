import React from 'react';
import '../css/counter.css'
import { useDispatch, useSelector } from "react-redux";
import {  increment } from "../store/counterSlice";

const CounterComponent = ({ id, bgColor }) => {
    const counter = useSelector((state) =>
        state.counter.counters.find(c => c.id === id)
    );
    const dispatch = useDispatch();

    if (!counter) return null;

    const handleIncrement = () => {
        dispatch(increment({id:id}));
    };

    const handleDecrement = (e) => {
        e.preventDefault(); // 우클릭 기본 동작 방지
        // dispatch(decrement(id));
    };

    return (
        <div>
            <div>
            </div>
            <span
                className="counter"
                style={{ backgroundColor: bgColor }}
                onClick={handleIncrement}
                onContextMenu={handleDecrement}
            >
                {counter.value} {/* 카운터 값 표시 */}
            </span>
        </div>
    );
};

export default CounterComponent;
// const [count, setCount ] = useState(startNumber)
// const increment = () =>{setCount(count+1)}
// const decrement = (e)=>{
//     e.preventDefault()
//     if(count >0){setCount(count-1)}
// }
// return (
//     <div>
//         <div>
//         </div>
//         <span className="counter" style={{backgroundColor:bgColor}} onClick={increment} onContextMenu={decrement}>
//             {count}
//         </span>
//     </div>
//
// );
