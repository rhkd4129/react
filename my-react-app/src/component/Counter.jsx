import React, {useState} from 'react';
import '../css/counter.css'
const CounterComponent = ({bgColor, startNumber}) => {
    const fontColor = {color:bgColor}

    const text = "hi";
    const [count, setCount ] = useState(startNumber)
    const increment = () =>{
        setCount(count+1)
    }
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
