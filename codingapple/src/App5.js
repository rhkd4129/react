import './App.css';
import { useState } from 'react';
function Header(props){ //컴포넌트
  
  return <header>
  <h1><a href="/" onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}

function NAV(props){
  const lis =[]  
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }} >{t.title}</a>
      </li>)
  }

  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}

function Article(props){
  return    <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}


// npm install -save react-scripts
function App() {
  // const _mode = useState('READ');
  // const mode = _mode[0];
  // const setMode = _mode[1];

  const [mode,setMode] = useState('WELCOME');
 
  const topics =[
    {id:1,title:'html',body:'html is ...'},
    {id:2,title:'csss',body:'csss is ...'},
    {id:3,title:'js',body:'js is ...'}
  ]
  let content = null;
  if(mode === 'WELCOME'){
    content = <Article title="Welcome" body="hello WELCOME"></Article>
  }else if(mode === 'READ'){
    content = <Article title="READ" body="hello READ"></Article>
  }
  return (
    <div>
        <Header title='REACT' onChangeMode = {()=>{
          setMode('WELCOME');
        }}></Header>
        <NAV topics={topics} onChangeMode= {(id)=>{
           setMode('READ');

        }}></NAV>
       {content}
     
    </div>
  );
}

export default App;
