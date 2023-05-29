import { useState } from 'react';
import React from "react";

class Pra extends React.Component{
    state={value:0}
    onClick=()=>{this.setState( ({value})=>({value:value+1})
        // ({value}) => ({
        //     value:value+1
        //      })
    )};
    onContextMenu=(e)=>{
        e.preventDefault();
        this.setState(({value})=>(
            value > 0 ?  {value:value-1} : 0 ))};
    render(){
        const {value} = this.state
        return(
        <div>
            <button onClick={this.onClick} 
            onContextMenu={this.onContextMenu}>
                {value}</button>
        </div>
        );
    }
}

// 클래스 컴포넌트는 상태값을 각각 업데이트가 가능했다면
// 함수형은 한번에 업데이트 시켜야 한다
function App4(props){
  const [value1,setValue1] =useState(0);
  const [fruits,setfruits] = useState({fruit1:1,fruit2:2});
//   const [value1,setvalue1] =  useState({value1:0,value2:1})

    const value1onClick =()=>{
        setValue1(value1+1)
        
    };

    const onContextMenu=(e)=>{
        e.preventDefault();
        setValue1(value1>0? value1-1:0)
        
    };
    const fruitsonClick =()=>{
        setfruits((prevState) =>(
            {...prevState,fruit1:prevState.fruit1+1}
            ))
    };


    return(

       
        <div>
            <button onClick={value1onClick} 
            onContextMenu={onContextMenu}>{value1} 
            </button>
            <button onClick={fruitsonClick}>{fruits.fruit1}</button> 
            <p>{props.text}</p>

        </div>
    );
}


export default App4 ;
