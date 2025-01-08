import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCounter} from "../store/counterSlice";
import Counter from "../component/Counter";



const Home = ()=>{
    const counters = useSelector((state)=>state.counter.counters);
    // const dispatch = useDispatch()
    // useEffect(() => {
    //         dispatch(addCounter({ startNumber: 1, bgColor: 'red' }))
    //         dispatch(addCounter({ startNumber: 2, bgColor: 'green' }));
    // }, [dispatch]);
// dispatch가 변경될 때마다 useEffect가 다시 실행됨
// 실제로는 dispatch는 거의 변경되지 않음 (Redux store가 생성될 때 한 번 만들어짐)
    return(
        <div>
            {counters.map(counter => (  // 괄호 추가*/}
                        <Counter
                        key={counter.id} counter={ counter}
                    />
                ))}
        </div>
    )
}
export  default  Home
