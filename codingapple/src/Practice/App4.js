import React, { useEffect } from 'react';
import { useState} from 'react';

class App1 extends React.Component{
    state={
        value1:0,
        value2:0,
    };

    onClick=()=>{
        this.setState({value1:10});
    };
    render(){
        const {value} = this.state;
        return (
        <div>
            Hello App1
            <hr/>
            {value}  
            <button onClick = {this.onClick}></button>
        </div>);
    }
}

function PostDetailCompenent({post}) {
    const {title,content} = post;
    return (
        <div>
            <h1>{title}</h1>
            {content}
        </div>
    );
}

function PostDetail({postId}){
    // const [loading,setLoading] =  useState(false);
    // const [error,seterror] =  useState(false);
    const [post,setPost] = useState();

    useEffect(()=>{
        // console.log('chagned postId',postId)
        setPost({'title':'포스팅 제목',contetnt:`포스팅내용...:' ${postId}`});
    },[postId]);
    return(
        <div>
            <h1>Post #{postId}</h1>
            {!post && '로딩 중 ..'}
            {post && <PostDetailCompenent post = {post}/>
            
            // <div>{JSON.stringify(post)}</div>
            }
        </div>
    );
}

function App2(){
    const [value1,setValue1] = useState(0);
    const [value2,setValue2] = useState(0);
    const [value,setValue] = useState({value1:0,value2:2});
    const [postId,SetPostId] = useState(1)
    // useEffect(()=> {}); //render시에 호출
    useEffect(()=> {console.log('mount')},[]); //mount시에만 호출
    useEffect(()=> {console.log('changed value')},[value]); // value가 변경될 시에 호출


    const onClick=()=>{
        setValue(prevState => ({...prevState,  vlaue1:10}));
    };

    
    return (
        <div> 
            Hello App2
            <hr />
            {value1}
            {value.value2}
            {JSON.stringify(value)}
            <button onClick={onClick}>Click</button>
            <hr/>
            <button onClick={()=>SetPostId(100)}>100번글 보기 </button>
            <PostDetail postId ={postId}/>
        </div>
    );
}

export default App2