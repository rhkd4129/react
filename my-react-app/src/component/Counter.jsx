import React, {useState} from 'react';
import '../css/counter.css'
const CounterComponent = ({bgColor, startNumber}) => {
    const fontColor = {color:bgColor}

    const text = "hi";
    const [count, setCount ] = useState(startNumber)
    const increment = () =>{
        setCount(count+1)
    }
    // state가 업데이트 되면 ui를 다시 그려준다. 함수가 끝나면 ui가 다시 그려진다 -> 비동기적이다.
    // 위에서는 incrememnt가 다 실행되고 나서야 count가 1올라간다,
    // 상태값이 초기화되고 ui가 업데이트되면 변수값이 초기화된다.



    const decrement = (e)=>{
        e.preventDefault()
        if(count >0){
            setCount(count-1)
        }
    }

    return (
        <div>

            <div style={fontColor}>
                First jsx {text}
            </div>
            <div>

            </div>
            <span className="counter" style={{backgroundColor:bgColor}} onClick={increment} onContextMenu={decrement}>
                {count}
            </span>
        </div>

    );
};

export default CounterComponent;

