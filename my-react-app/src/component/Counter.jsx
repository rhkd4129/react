import React from 'react';
import '../css/counter.css'
import { useDispatch, useSelector } from "react-redux";
import {  increment ,decrement} from "../store/counterSlice";

const CounterComponent = ({ counter }) => {
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment({id:counter.id}));
    };

    const handleDecrement = (e) => {
        e.preventDefault(); // 우클릭 기본 동작 방지
        dispatch(decrement({id:counter.id}));
    };

    return (
        <div>
            <div>
            </div>
            <span
                className="counter"
                style={{ backgroundColor: counter.bgColor }}
                onClick={handleIncrement}
                onContextMenu={handleDecrement}
            >
                {counter.value} {/* 카운터 값 표시 */}
            </span>
        </div>
    );
};

export default React.memo(CounterComponent);
