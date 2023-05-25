import './App.css';
import { Button } from 'antd/es/radio';
import React from 'react';

const actions = {
  init(initialValue){return {value:initialValue}},
  increment(prevState){return{ value:prevState.value+1};},
  decrement(prevState){return{ value:prevState.value-1};}
}


class Counter1 extends React.Component{
  state=actions.init(this.props.initialValue)
  
  render(){
    const {value}  = this.state;
    return(
    <div>
      counter1 :{value}
      <Button onClick={()=>{this.setState(actions.increment)}}>+1</Button>
      <Button onClick={()=>{this.setState(actions.decrement)}}>+1</Button>
      </div>
    )
    
  }
}

class FruitComponent extends React.Component{
  render(){
    return(
      <div>
        <h1>좋아하는 과일</h1>
         <ul>
             {this.props.fruits.map((name,index )=>(<li key={index}>{name}</li>))}

         </ul>
      </div>
    )
  }
}

class PostDetail extends React.Component{
  render(){
    const {postId} = this.props;
    return(
      <div>
         포스팅 #{postId}
         <hr/>
         포스팅 내용 ..
      </div>
    );


  }
}


function App() {

  const fruits = ['바나나','사과','딸기'];
  return (
    
   <div>
    <Counter1 initialValue={10}/>

    <FruitComponent fruits={fruits}></FruitComponent>
    <PostDetail postId={10}/>
   </div>

    
  );
}

export default App;
