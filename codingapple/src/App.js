import { useState } from 'react';
import './App.css';
function App() {
  let post ='강남';
  let [글제목_1,set글제목_1] = useState(['남자 코트 추천','강남우동 맛집 코트 추천','세번째']);
  let [like,setlike] = useState(0)

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      <div className='list'>
          <h4>{글제목_1[0]} <span onClick={()=>{ setlike(like+1)  }}>👍</span>{like}</h4>
          <p>2월 17일 발행<button onClick={()=>{
            let copy = [...글제목_1];
            copy[0] ='여자코트 추천';
            set글제목_1(copy)
          }}>변경</button></p>
      </div>

      <div className='list'>
          <h4>{글제목_1[1]}</h4>
          <p>2월 17일 발행</p>
      </div>


      <div className='list'>
          <h4>{글제목_1[2]}</h4>
          <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
